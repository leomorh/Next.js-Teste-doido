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
  

  const handleDataFromChild = async (data={}) => { 
    if (!data.id) {
      await registerAddress(data); 
    } else {
      await updateAddress(data);
    }
  
  };

  const delData = async (id) => {
    try {
      const response = await axios.post(`/adress/delet/${id}`);
      if (response.type === "success") {
        setLoading;
        fetchData();
      }
    } catch (err) {
      setError(err.message || "Failed to delete address");
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


  const registerAddress = async (data) => {
    try {
      const response = await axios.post("/adress/persist", {...data});
      if (response.type === "sucess") {
        setLoading
        fetchData(); 
      }
    } catch (err) {
      setError(err.message || "Error occurred while registering address");
    }
  };

  const updateAddress = async (data) => {
    try {
      const response = await axios.post(`/adress/persist/${data.id}`, {...data});
      if (response.type === "success") {
        setLoading
        fetchData();
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
      <MainLayout><Tabela data={data} handleDataFromParent={handleDataFromChild} delData={delData} fetchData={fetchData}/></MainLayout>
    </div>
  );
};

export default MainPage;

