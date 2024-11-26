import Cadastro from "@/components/cadastro";
import MainLayout from "@/layouts/layoutPadrao";
import { Center } from "@chakra-ui/react";

export default function CardWithForm(){
return (
  <MainLayout>
  <Center>
  <Cadastro></Cadastro>
  </Center>
  </MainLayout>
);
}