import React, { useState, useEffect } from "react";
import axios from "@/utils/axios.js";
import Tabela from "@/components/TabelaEndereco"
import MainLayout from "@/layouts/layoutPadrao";
import { Skeleton } from "@/components/ui/skeleton"
import { HStack, Stack, Text } from "@chakra-ui/react"

const MainPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, setState] = useState('');
  const [zip_code, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');



  const handleDataFromChild = async (data) => {
    setZipcode(data.zip_code)
    setState(data.state)
    setCity(data.city)
    setDistrict(data.district)
    setStreet(data.street)
    registerAddress()
  };

  const delData = async (id) => {
    try {
      const response = await axios.post(`/adress/delet/${id}`);
      if (response.data === 200) {
        setLoading(true);
        fetchData;
      }
    } catch (err) {
      setError(err.message || "Failed to fetch data");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/adress/getall");
      if (response.data && Array.isArray(response.data)) {
        setData(response.data);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const registerAddress = async () => {
    try {
      const response = await axios.post("/adress/persist/", { zip_code: zip_code, state: state, city: city, street: street, district: district });
      if (response.status === 200) {
        setLoading(true);
        fetchData;
      }
    } catch (err) {
      setError(err.message || "Error occurred while registering address");
    }
  };

  useEffect(() => {
    const callFun = async () => {
      await fetchData()
    }
    callFun()
  }, []);

  if (loading) {
    return <MainLayout><Stack gap="5">
      <HStack gap="5">
        <Text width="8ch">Loading...</Text>
        <Skeleton flex="1" height="5" variant="shine" />
      </HStack>
    </Stack></MainLayout>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <MainLayout><Tabela data={data} handleDataFromParent={handleDataFromChild} delData={delData} /></MainLayout>
    </div>
  );
};

export default MainPage;

