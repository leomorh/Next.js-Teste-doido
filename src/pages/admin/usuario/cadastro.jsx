import Cadastro from "@/components/cadastro";
import MainLayout from "@/layouts/layoutPadrao";
import { Center, HStack, Text, Skeleton, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "../../../utils/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardWithForm() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [endereco, setEndereco] = useState([]);
  let Adress = {idUser, endereco};

  const handleDataFromChild = async (data, endereco = {}) => {
    await registerUser(data, endereco);
  };

  const registerUser = async (data, endereco = {}) => {
    try {
      const response = await axios.post("/user/persist", { ...data });
      if (response.data.type === "success") {
        toast.success("Usuário cadastrado com sucesso!");
        await itemSetter(response.data.id, endereco);
      }
    } catch (err) {
      toast.error(err.message || "Erro ao cadastrar usuário");
      setError(err.message || "Erro ao cadastrar usuário");
    }
  };

  const itemSetter = async (idUser, endereco = {}) => {
    setIdUser(idUser);
    setEndereco(endereco);
    Adress = {idUser, ...endereco};
    await registerAddress(Adress);
  };

  const registerAddress = async (Adress) => {
    try {
      const response = await axios.post("/adress/persist", { ...Adress });
      if (response.status === 200) {
        toast.success("Endereço cadastrado com sucesso!");
      }
    } catch (err) {
      toast.error(err.message || "Erro ao cadastrar endereço");
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
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Center>
        <Cadastro handleDataFromChild={handleDataFromChild}></Cadastro>
      </Center>
      <ToastContainer />
    </MainLayout>
  );
}
