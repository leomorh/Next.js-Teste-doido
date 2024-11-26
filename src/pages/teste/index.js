import Login from "@/components/login";
import Imagem from "@/components/image";
import MainLayout from "@/layouts/layoutPadrao";
import { HStack, Image } from "@chakra-ui/react";
import Background from "@/components/backgroundImage";

export default function CardWithForm(){
return (
  <MainLayout>
  <HStack>
  <Imagem></Imagem>
  <Login></Login>
  </HStack>
  </MainLayout>
);
}
