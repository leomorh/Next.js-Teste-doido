import { Box, Heading, Button, Center, Text, DrawerTrigger, Icon, HStack, Grid, GridItem } from "@chakra-ui/react"
import { MdOutlineSailing } from "react-icons/md";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerRoot
} from "@/components/ui/drawer"
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const router = useRouter();

  // Function to handle navigation
  const goEndereco = () => {
    router.push('/admin/endereco');
  };
  const goTermos = () => {
    router.push('/');
  };
  const goPolitic = () => {
    router.push('/');
  };
  const goServico = () => {
    router.push('/');
  };
  const goPerguntas = () => {
    router.push('/');
  };
  const goMainPage = () => {
    router.push('/');
  };

 
  const handleLogout = () => {
    localStorage.setItem('token', null);  
    router.push('/'); 
  };

  return (
    <Box display="flex" flexDirection="column" Height="100vh">
      <Heading bgGradient="to-r" gradientFrom="red" gradientTo="red.200" w='full' color="red" display="block" height="4%">
        <DrawerRoot placement="left">
          <DrawerBackdrop />
          <DrawerTrigger>
            <HStack cursor="pointer">
              <Icon>
                <MdOutlineSailing color="black" />
              </Icon>
              <Text color="black"> Menu </Text>
            </HStack>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle textStyle="4xl" color="red" fontFamily="fantasy">MENU</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Grid gap="3" width="100%" templateRows="repeat(1, 1fr)" templateColumns="repeat(5, 1fr)">
                <GridItem colSpan={5} rowSpan={1}>
                  <Button onClick={goMainPage} bgGradient="to-r" gradientFrom="red" gradientTo="red.200" width="100%">
                    <Grid width="100%" templateRows="repeat(1, 2fr)" templateColumns="repeat(5, 1fr)" cursor="pointer">
                      <GridItem colSpan={1}>
                        <Icon>
                          <MdOutlineSailing color="black" />
                        </Icon>
                      </GridItem>
                      <GridItem colSpan={4}>
                        <Text fontFamily="fantasy">Pagina inicial</Text>
                      </GridItem>
                    </Grid>
                  </Button>
                </GridItem>
                <GridItem textStyle="3xl" colSpan={5} color="red" fontFamily="fantasy">
                  Tabelas
                </GridItem>
                <GridItem colSpan={5}>
                  <Button bgGradient="to-r" gradientFrom="red" gradientTo="red.200" onClick={goEndereco} width="100%">
                    <Grid width="100%" templateRows="repeat(1, 2fr)" templateColumns="repeat(5, 1fr)" cursor="pointer">
                      <GridItem colSpan={1}>
                        <Icon>
                          <MdOutlineSailing color="black" />
                        </Icon>
                      </GridItem>
                      <GridItem colSpan={4}>
                        <Text fontFamily="fantasy">Endereço</Text>
                      </GridItem>
                    </Grid>
                  </Button>
                </GridItem>
                <GridItem colSpan={5}>
                  <Button bgGradient="to-r" gradientFrom="red" gradientTo="red.200" onClick={goEndereco} width="100%">
                    <Grid width="100%" templateRows="repeat(1, 2fr)" templateColumns="repeat(5, 1fr)" cursor="pointer">
                      <GridItem colSpan={1}>
                        <Icon>
                          <MdOutlineSailing color="black" />
                        </Icon>
                      </GridItem>
                      <GridItem colSpan={4}>
                        <Text fontFamily="fantasy">Usuarios</Text>
                      </GridItem>
                    </Grid>
                  </Button>
                </GridItem>
              </Grid>
            </DrawerBody>
            <DrawerFooter>
            <Button cursor="pointer" variant="solid" colorPalette="red" color="blackAlpha.900" onClick={handleLogout}>Logout</Button>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Heading>

      <main style={{ flex: 1, width: '100%' }} height="91%"><Box heigth="100%" padding="3vh">{children}</Box></main>

      <footer width="full" height="5%">
        <Center as="footer" width="full" heigth="100%">
          <Button cursor="pointer" variant="plain" color="red" onClick={goTermos}>Termos de Serviço</Button>
          <Button cursor="pointer" variant="plain" color="red" onClick={goPolitic}>Política de Privacidade</Button>
          <Button cursor="pointer" variant="plain" color="red" onClick={goServico}>Termos de Serviço de IA</Button>
          <Button cursor="pointer" variant="plain" color="red" onClick={goPerguntas}>Perguntas Frequentes</Button>
        </Center>
      </footer>
    </Box>
  );
};

export default MainLayout;
