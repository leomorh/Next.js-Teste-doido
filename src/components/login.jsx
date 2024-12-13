import { Button, Card, Input, Stack, Image, HStack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Login({ handleClick }) {

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const data = { Username, Password };

  const router = useRouter()

  const goPage = () => {
    router.push('/');
  }

  const goSenha = () => {
    router.push('/public/senha')
  }

  const goCadastro = () => {
    router.push('/admin/usuario/cadastro')
  }


  const goEntrar = async () => {
    if (data) {
      await handleClick(data);
    }
    else {
      await alert("falta de informações")
    }
  }



  return (
    <Card.Root width="1/3" float="right" height="100vh" gap="4">
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
          <Field label="Usuario" color="red">
            <Input onChange={(a) => setUsername(a.target.value)} required placeholder="Seu Usuario" />
          </Field>
          <Field label="Senha" color="red">
            <PasswordInput onChange={(a) => setPassword(a.target.value)} required placeholder="Sua Senha" />
          </Field>
          <HStack>
            <Field>
              <Checkbox>Lembrar-me</Checkbox>
            </Field>
            <Field>
              <Button variant="plain" colorPalette="red" size="sm" float="right" onClick={goSenha}> esqueci minha senha </Button>
            </Field>
          </HStack>
          <Button width="full" variant="solid" colorPalette="red" onClick={goEntrar} size="xl"> Entrar </Button>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button width="35%" variant="surface" colorPalette="red" onClick={goCadastro} >Cadastrar</Button>
        <Button variant="outline" colorPalette="red" size="sm" onClick={goPage}> Cancel </Button>
      </Card.Footer>
    </Card.Root>
  );
}


