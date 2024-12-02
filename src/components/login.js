import { Button, Card, Input, Stack, Image, HStack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { Checkbox } from "@/components/ui/checkbox"



export default function Login(){
  
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
        <Field label="Usuario" color="red">
        <Input required placeholder="Seu Usuario"/>
        </Field>
        <Field label="Senha" color="red">
        <PasswordInput required placeholder="Sua Senha"/>
        </Field>
        <HStack>
        <Field>
        <Checkbox>Lembrar-me</Checkbox>
        </Field>
        <Field>
        <Button variant="plain" colorPalette="red" size="sm" float="right"> esqueci minha senha </Button>
        </Field>
        </HStack>
        <Button width="full" variant="solid" colorPalette="red"  size="xl"> Entrar </Button>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button width="35%" variant="surface" colorPalette="red"  >Cadastrar</Button>
      <Button variant="outline" colorPalette="red"  size="sm"> Cancel </Button>
    </Card.Footer>
  </Card.Root>
  );
}


