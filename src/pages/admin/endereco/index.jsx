import React, { useState, useEffect } from "react";
import axios from "@/utils/axios.js";
import Tabela from "@/components/TabelaEndereco";
import MainLayout from "@/layouts/layoutPadrao";
import { Skeleton } from "@/components/ui/skeleton";
import { HStack, Stack, Text } from "@chakra-ui/react";


const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleDataFromChild = async (data = {}) => {
    if (!data.id) {
      await registerAddress(data);
    } else {
      await updateAddress(data);
    }
  };


  const delData = async (id) => {
    try {
      setLoading(true);
      const response = await axios.post(`/adress/delet/${id}`);
      if (response.status === 200) {
        fetchData();
      }
    } catch (err) {
      setError(err.message || "Falha ao deletar endereço");
    } finally {
      setLoading(false);
    }
  };


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/adress/getall");
      if (response.data && Array.isArray(response.data)) {
        setData(response.data);
      }
    } catch (err) {
      setError(err.message || "Falha ao buscar dados");
    } finally {
      setLoading(false);
    }
  };


  const registerAddress = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("/adress/persist", { ...data });
      console.log(data)
      if (response.status === 200) {
        fetchData();
      }
    } catch (err) {
      setError(err.message || "Erro ao cadastrar endereço");
    } finally {
      setLoading(false);
    }
  };

  const updateAddress = async (data) => {
    console.log(data)
    try {
      setLoading(true);
      const response = await axios.post(`/adress/persist/${data.id}`, { ...data });
      if (response.status === 200) {
        fetchData();
      }
    } catch (err) {
      setError(err.message || "Erro ao editar endereço");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

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
        <div>
          {error}
        </div>
      </MainLayout>);
  }

  return (
    <div>
      <MainLayout>
        <Tabela data={data} handleDataFromParent={handleDataFromChild} delData={delData} />
      </MainLayout>
    </div>
  );
};

export default MainPage;

