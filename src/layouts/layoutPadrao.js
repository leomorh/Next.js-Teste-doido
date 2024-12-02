import { Box, Heading, Button, Center, DrawerActionTrigger, DrawerTrigger, Icon } from "@chakra-ui/react"
import { MdOutlineSailing } from "react-icons/md";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "@/components/ui/drawer"


const MainLayout = ({ children, data }) => {

  return (
    <Box>
      <Heading w='full' color="red" backgroundColor="#F40009" display="block" height="5vh">
        <DrawerRoot placement="left">
          <DrawerBackdrop />
          <DrawerTrigger>
            <Icon fontSize="large">
              <MdOutlineSailing color="black" cursor="pointer" />
            </Icon>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>LISTA</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </DrawerBody>
            <DrawerFooter>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Heading>
      <main><Box width="full" padding="3vh" height="90vh">{children}</Box></main>
      <footer width="full">
        <Center>
          <Button cursor="pointer" variant="plain" color="red" onClick={() => { data }} >Termos de Serviço</Button>
          <Button cursor="pointer" variant="plain" color="red" onClick={() => { data }} >Política de Privacidade </Button>
          <Button cursor="pointer" variant="plain" color="red" onClick={() => { data }} >Termos de Serviço de IA</Button>
          <Button cursor="pointer" variant="plain" color="red" onClick={() => { data }} >Perguntas Frequentes</Button>
        </Center>
      </footer>
    </Box>
  );
}

export default MainLayout;