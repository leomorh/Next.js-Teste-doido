import React, { useState, useEffect } from "react";
import axios from "@/utils/axios.js";
import Tabela from "@/components/TabelaEndereco";
import MainLayout from "@/layouts/layoutPadrao";
import { Skeleton } from "@/components/ui/skeleton";
import { HStack, Stack, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';

const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/');
          return;
        }
        const response = await axios.post('/getByToken', { token });
        if (response.type === 'authorized') {
          setIsAuthorized(true);
          fetchData(token);
        } else {
          setError(response.message);
          router.push('/');
        }
      } catch (error) {
        console.error('Error verifying user:', error);
        setError('Error verifying user');
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [router]);

  const fetchData = async (token) => {
    try {
      setLoading(true);
      const response = await axios.get("/adress/getall", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data && Array.isArray(response.data)) {
        setData(response.data);
      }
    } catch (err) {
      setError(err.message || "Falha ao buscar dados");
    } finally {
      setLoading(false);
    }
  };

  const handleDataFromChild = async (data = {}) => {
    if (!data.id) {
      await registerAddress(data);
    } else {
      await updateAddress(data);
    }
  };

  const registerAddress = async (data) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      setLoading(true);
      const response = await axios.post("/adress/persist", { ...data }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        fetchData(token);
      }
    } catch (err) {
      setError(err.message || "Erro ao cadastrar endereço");
    } finally {
      setLoading(false);
    }
  };

  const updateAddress = async (data) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      setLoading(true);
      const response = await axios.post(`/adress/persist/${data.id}`, { ...data }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        fetchData(token);
      }
    } catch (err) {
      setError(err.message || "Erro ao editar endereço");
    } finally {
      setLoading(false);
    }
  };

  const delData = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) return;
    try {
      setLoading(true);
      const response = await axios.post(`/adress/delet/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.status === 200) {
        fetchData(token);
      }
    } catch (err) {
      setError(err.message || "Falha ao deletar endereço");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <MainLayout>
        <Stack gap="5">
          <HStack gap="5">
            <Text width="8ch">Loading...</Text>
            <Skeleton flex="1" height="5" variant="shine" />
          </HStack>
        </Stack>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div>{error}</div>
      </MainLayout>
    );
  }
  if (!isAuthorized) {
    return (
      <MainLayout>
        <div>Unauthorized access</div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Tabela data={data} handleDataFromParent={handleDataFromChild} delData={delData} />
    </MainLayout>
  );
};

export default MainPage;

