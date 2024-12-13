import Login from "@/components/login";
import Imagem from "@/components/image";
import MainLayout from "@/layouts/layoutPadrao";
import { HStack } from "@chakra-ui/react";
import axios from "../../utils/axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardWithForm() {
  const router = useRouter()

  const handleClick = async (data) => {
    try {
      const response = await axios.post(`/user/login`, { ...data });
      if (response.type === "success") {
        localStorage.setItem('token', response.token);
        console.log(response.token)
        toast.success(response.message);
        await router.push("/");
      } else {
        toast.error("Erro no login, tente novamente.");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Erro na requisição. Tente novamente.");
    }
  }

  return (
    <MainLayout>
      <HStack h="100vh">
        <Imagem />
        <Login handleClick={handleClick} />
      </HStack>
      <ToastContainer/>
    </MainLayout>
  );
}

