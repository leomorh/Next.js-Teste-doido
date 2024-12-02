import { Button, Card, Input, Stack, Image, Grid, GridItem } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { useRouter } from 'next/router'

function Cadastro(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const goPage = () => {
    router.push('/')
  }


  return(
 <Card.Root width ="1/3">
    <Card.Header>
      <Card.Title>
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
        alt="Ogochi Logo"
        p="12"
      
      />
      </Card.Title>
      <Card.Description fontSize="lg" color="red">
        Faça seu cadastro
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field label=" Nome do Usuario" color="red">
        <Input placeholder="Seu Usuario"/>
        </Field>
        <Field label="Senha" color="red">
        <PasswordInput placeholder="Sua Senha"/>
        </Field>
        <Field label="Confirme sua Senha" color="red">
        <PasswordInput placeholder="Sua Senha"/>
        </Field>
        <Field label="Cpf" color="red">
        <Input placeholder="cpf"/>
        </Field>
        <Field label="Endereço" color="red">
        <Grid width="full" height="30%" gap="2" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={5} width="full" height="25%" rowSpan="full"><Input placeholder="cidade"/></GridItem>
        <GridItem colSpan={5}><Input placeholder="bairro"/></GridItem>
        <GridItem colSpan={4}><Input placeholder="Rua"/></GridItem>
        <GridItem colSpan={1}><Input placeholder="complemento"/></GridItem>
        </Grid>
        </Field>
        <Field label="Numero de Telefone" color="red">
          <Input placeholder="numero" color="red"/>
        </Field>
        <Field label="Email" color="red">
        <Input placeholder="Email"/>
        </Field>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="surface" colorPalette="red" onClick={goPage}>Cadastrar</Button>
      <Button variant="outline" colorPalette="red" onClick={goPage}size="sm" >Cancel</Button>
    
    </Card.Footer>
  </Card.Root>
  );
}

export default Cadastro;