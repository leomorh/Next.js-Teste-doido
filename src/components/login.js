import { Button, Card, Input, Stack, Image } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import Popover from "@/components/popover";




function Login(){
  const router = useRouter()

  const goPage = () => {
    router.push('/')
  }
  const goCadastro = () => {
    router.push('/teste/cadastro')
  }


  return(
 <Card.Root width ="1/3" float ="right" height ="100vh">
    <Card.Header>
      <Card.Title>
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
        alt="Ogochi Logo"
        p="12"
      />
      </Card.Title>
      <Card.Description fontSize="lg" color="red">
        Acesse sua conta
      </Card.Description>
    </Card.Header>
    <Card.Body height="20%">
      <Stack gap="4" w="full">
        <Popover></Popover>
        <Field label="Usuario" color="red">
        <Input placeholder="Seu Usuario"/>
        </Field>
        <Field label="Senha" color="red">
        <PasswordInput placeholder="Sua Senha"/>
        <Button width="25%" variant="plain" colorPalette="red" onClick={goPage} size="sm">esqueci minha senha</Button>
        </Field>
        
        <Button width="full" variant="solid" colorPalette="red" onClick={goPage} size="xl">Entrar</Button>
        
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button width="35%" variant="surface" colorPalette="red" onClick={goCadastro}>Cadastrar</Button>
      <Button variant="outline" colorPalette="red" onClick={goPage}size="sm" >Cancel</Button>
    
    </Card.Footer>
  </Card.Root>
  );
}

export default Login;