import { Box, Heading, Button, Center, Text, DrawerTrigger, Icon, HStack } from "@chakra-ui/react"
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
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Heading w='full' color="red" backgroundColor="#F40009" display="block" height="4vh">
        <DrawerRoot placement="left">
          <DrawerBackdrop />
          <DrawerTrigger>
            <HStack cursor="pointer">
              <Icon >
                <MdOutlineSailing color="black" />
              </Icon>
              <Text color="black"> Menu </Text>
            </HStack>
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
      <main style={{ flex: 1, width: '100%' }} ><Box padding="3vh">{children}</Box></main>

      <footer width="full" height="5vh">
        <Center as="footer" width="full" height="5vh" >
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