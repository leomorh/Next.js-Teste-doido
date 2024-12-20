import { Button, Card, Input, Stack, Image, Grid, GridItem, Box, Center } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { PasswordInput } from "@/components/ui/password-input"
import { useRouter } from 'next/router'
import { useState } from "react";
import { withMask } from 'use-mask-input';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


export default function Cadastro({ handleDataFromChild }) {
  const [Name, setName] = useState(null);
  const [Username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Cpf, setCpf] = useState(null);
  const [State, setState] = useState(null);
  const [Zipcode, setZipcode] = useState(null);
  const [Street, setStreet] = useState(null);
  const [District, setDistrict] = useState(null);
  const [City, setCity] = useState(null);
  const [Number, setNumber] = useState(null);
  const [Complement, setComplement] = useState(null);
  const [PasswordConfirm, setPasswordConfirm] = useState(null);
  Zipcode, State, Street, City, District, Number, Complement
  const data = { Username, Name, Password, Phone, Email, Cpf }
  const endereco = { Zipcode, State, Street, City, District, Number, Complement }

  const router = useRouter()

  const goPage = async () => {
    router.push('/')
  }

  const SendData = async () => {
    if (!Name || !Username || !Password || !Phone || !Email || !Cpf || !Zipcode || !State || !Street || !District || !City || !Number || !Complement) {
      toast.error("Preencha todos os valores!");
      return;
    }

    if (Password !== PasswordConfirm) {
      toast.error("Senhas estão diferentes!");
      return;
    }

    handleDataFromChild(data, endereco);
    await goPage();
  };

  return (
    <Center>
      <Card.Root width="1/3">
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
              <Input required onChange={(e) => setName(e.target.value)} placeholder="Seu Nome" />
            </Field>
            <Field label=" Usuario" color="red">
              <Input required onChange={(e) => setUsername(e.target.value)} placeholder="Seu Usuario" />
            </Field>
            <Field label="Senha" color="red">
              <PasswordInput required onChange={(e) => setPassword(e.target.value)} placeholder="Sua Senha" />
            </Field>
            <Field label="Confirme sua Senha" color="red">
              <PasswordInput required onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Sua Senha" />
            </Field>
            <Field label="CPF" color="red">
              <Input required onChange={(e) => setCpf(e.target.value)} placeholder="CPF" ref={withMask('999.999.999-99')} />
            </Field>
            <Field label="Endereço" color="red">
              <Grid width="full" maxHeight="30%" gap="2" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)">
                <GridItem invalid label="CEP" errorText="This field is required" colSpan={5} width="full" height="25%" rowSpan="full"><Input required onChange={(e) => setZipcode(e.target.value)} ref={withMask("99999-999")} placeholder="CEP" /></GridItem>
                <GridItem colSpan={5}><Input required onChange={(e) => setState(e.target.value)} placeholder="Estado" ref={withMask("AA")} /></GridItem>
                <GridItem colSpan={5}><Input required onChange={(e) => setCity(e.target.value)} placeholder="cidade" /></GridItem>
                <GridItem colSpan={5}><Input required onChange={(e) => setDistrict(e.target.value)} placeholder="Bairro" /></GridItem>
                <GridItem colSpan={3}><Input required onChange={(e) => setStreet(e.target.value)} placeholder="Rua" /></GridItem>
                <GridItem colSpan={1}><Input required onChange={(e) => setNumber(e.target.value)} placeholder="Numero" /></GridItem>
                <GridItem colSpan={1}><Input required onChange={(e) => setComplement(e.target.value)} placeholder="Complemento" /></GridItem>
              </Grid>
            </Field>
            <Field label="Numero de Telefone" color="red">
              <Input required onChange={(e) => setPhone(e.target.value)} placeholder="numero" color="red" ref={withMask("(99) 9 9999-9999")} />
            </Field>
            <Field label="Email" color="red">
              <Input required onChange={(e) => setEmail(e.target.value)} placeholder="eu@exemplo.com" />
            </Field>
          </Stack>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="surface" colorPalette="red" onClick={SendData}>Cadastrar</Button>
          <Button variant="outline" colorPalette="red" onClick={goPage} size="sm" >Cancel</Button>
        </Card.Footer>
      </Card.Root>
      <ToastContainer />
    </Center>
  );
}
