import Login from "@/components/login";
import Imagem from "@/components/image";
import MainLayout from "@/layouts/layoutPadrao";
import { HStack } from "@chakra-ui/react";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CardWithForm() {
  const router = useRouter()

  const handleClick = async (data) => {
    try {
      const response = await axios.post(`/user/login`, { ...data })
      localStorage.setItem('token', response.token)
      if (response.status === 200 || localStorage.getItem) {
        if (response.data.role === "admin") {
          router.push('/admin/endereco')
        }
        else {
          router.push('/')
        }
      }
    } catch (error) {
      console.log(error.message);

    }
  }

  return (
    <MainLayout>
      <HStack>
        <Imagem></Imagem>
        <Login handleClick={handleClick}></Login>
      </HStack>
    </MainLayout>
  );
}
