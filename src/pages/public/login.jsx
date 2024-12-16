import Login from "@/components/login";
import Imagem from "@/components/image";
import MainLayout from "@/layouts/layoutPadrao";
import { HStack } from "@chakra-ui/react";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardWithForm() {
  const router = useRouter();


  const handleClick = async (data) => {
    try {
      const response = await axios.post(`/user/login`, { ...data });
      if (response.type === "success") {
        localStorage.setItem('token', response.token);
        await router.push("/");
      } else if(response.type === "error") {
        toast.error(response.message);
      }
    } catch (error) {
      console.log("erro de requisição")
    }
  };

  return (
      <HStack h="100vh">
        <Imagem />
        <Login handleClick={handleClick} />
        <ToastContainer />
      </HStack>
  );
}



