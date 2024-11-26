import { Box, Heading, Button, Grid, HStack, GridItem, Center } from "@chakra-ui/react"
import { useRouter } from 'next/router'

const MainLayout=({children}) =>
{

  const router = useRouter()

  const goPage = () => {
    router.push('/')
  }


  return(
      <Box height="100vh">
      <Heading w='full' color="red" backgroundColor="#F40009" display="block">
      COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA  COCA-COLA
      </Heading>
      <main><Box width="full">{children}</Box></main>
      <footer width="100%">
      <Center>
      <Button variant="plain" colorPalette="red" onClick={goPage} >Termos de Serviço</Button>
      <Button variant="plain" colorPalette="red" onClick={goPage} >Política de Privacidade </Button>
      <Button variant="plain" colorPalette="red" onClick={goPage} >Termos de Serviço de IA</Button>
      <Button variant="plain" colorPalette="red" onClick={goPage} >Perguntas Frequentes</Button>
      </Center></footer>
      </Box>

      
);
}

export default MainLayout;