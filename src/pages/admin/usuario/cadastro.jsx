import Cadastro from "@/components/cadastro";
import MainLayout from "@/layouts/layoutPadrao";
import { Center, HStack, Text, Skeleton, Stack } from "@chakra-ui/react";
import registerAddress from "../endereco/index"
import React from "react";
import { useState } from "react";
import axios from "../../../utils/axios";


export default function CardWithForm(){

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataFromChild = async (data = {}) => {
    await registerUser(data);
  };

  const registerUser = async (data) => {
    try {
      const response = await axios.post( "user/persist", { ...data });
      if (response.status === 200) {
        alert("Cadastro realizado com sucesso")
      }
    } catch (err) {
      setError(err.message || "Erro ao cadastrar endereço");
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
        <div>
          {error}
        </div>
      </MainLayout>);
  }


return (
  <MainLayout>
  <Center>
  <Cadastro handleDataFromChild={handleDataFromChild}></Cadastro>
  </Center>
  </MainLayout>
);
}