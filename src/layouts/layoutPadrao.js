import { Box, Heading, Button, Center, Text, Icon, HStack, Grid, GridItem } from "@chakra-ui/react";
import { MdOutlineSailing } from "react-icons/md";
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerRoot, DrawerTrigger } from "@/components/ui/drawer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const MainLayout = ({ children }) => {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);

  const goLogin = () => {
    router.push('/public/login');
  };

  const goMainPage = () => {
    router.push('/');
  };

  const goEndereco = () => {
    router.push('/admin/endereco');
  };
  const goUsuario = () => {
    router.push('/admin/usuario');
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

  const handleLogout = async () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      setToken(null);
      router.push('/public/login');
    }
  };

  if (!token) {
    return (
      <Box display="flex" flexDirection="column" height="100vh">
        <Heading bgGradient="to-r" gradientFrom="red" gradientTo="red.200" w="full" color="red" display="block" height="4%">
          <Icon cursor="pointer" onClick={goLogin}>
            <MdOutlineSailing color="black" />
          </Icon>
        </Heading>

        <main style={{ flex: 1, width: '100%' }} height="91%">
          <Box height="100%" padding="3vh">
            {children}
          </Box>
        </main>

        <footer width="full" height="5%">
          <Center as="footer" width="full" height="100%">
            <Button cursor="pointer" variant="plain" color="red" onClick={goTermos}>Termos de Serviço</Button>
            <Button cursor="pointer" variant="plain" color="red" onClick={goPolitic}>Política de Privacidade</Button>
            <Button cursor="pointer" variant="plain" color="red" onClick={goServico}>Termos de Serviço de IA</Button>
            <Button cursor="pointer" variant="plain" color="red" onClick={goPerguntas}>Perguntas Frequentes</Button>
          </Center>
        </footer>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Heading bgGradient="to-r" gradientFrom="red" gradientTo="red.200" w="full" color="red" display="block" height="4%">
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
                  <Button bgGradient="to-r" gradientFrom="red" gradientTo="red.200" onClick={goUsuario} width="100%">
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
              <HStack>
                {token && (
                  <Button cursor="pointer" variant="solid" color="blackAlpha.900" bgColor="red" onClick={handleLogout}>Logout</Button>
                )}
              </HStack>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Heading>

      <main style={{ flex: 1, width: '100%' }} height="91%">
        <Box height="100%" padding="3vh">
          {children}
        </Box>
      </main>

      <footer width="full" height="5%">
        <Center as="footer" width="full" height="100%">
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





