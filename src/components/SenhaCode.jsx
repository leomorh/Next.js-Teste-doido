import { AbsoluteCenter, Button, Card, Input, Stack, Text, VStack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useRouter } from 'next/router';
import React, { useState } from "react";
import { PasswordInput } from "./ui/password-input";


export default function NovaSenha({ handleDataFromChild, sendCode, sendPassword }) {

  const [Email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1);
  const router = useRouter();


  const sendData = async () => {
      await handleDataFromChild(Email)
      if (controller === true) {
        await setStep(2)
      }
  }

  const sendData2 = async () => {
    sendCode({ Email, code })
    if (controller === true) {
      setStep(3)
    }
  }

  const sendData3 = async () => {
    if (newPassword === ConfirmPassword) {
      sendPassword({ Email, newPassword })
      if (controller === true) {
        setStep(4)
      }
    }
  }

  const goPage = () => {
    router.push('/')
  }



  return (
    <AbsoluteCenter w="100%" h="100%">
      {step === 1 && (
        <Card.Root width="60%" size='lg'>
          <Card.Header>
            <Card.Title>Nova Senha</Card.Title>
            <Card.Description>
              informe seu email para recuperação
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Email" color="red">
                <Input errorText="This field is required" required onChange={(e) => setEmail(e.target.value)} placeholder="eu@exemplo.com" />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline" onClick={goPage}>Cancel</Button>
            <Button id ="botao" variant="solid" onClick={sendData}>Próximo</Button>
          </Card.Footer>
        </Card.Root>
      )}
      {step === 2 && (
        <Card.Root width="60%">
          <Card.Header>
            <Card.Title>Nova Senha</Card.Title>
            <Card.Description>
              informe o codigo de acesso
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Email" color="red">
                <Input required onChange={(e) => setCode(e.target.value)} placeholder="9999" />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline" onClick={goPage}>Cancel</Button>
            <Button variant="solid" onClick={sendData2} >Próximo</Button>
          </Card.Footer>
        </Card.Root>
      )}
      {step === 3 && (
        <Card.Root width="60%">
          <Card.Header>
            <Card.Title>Nova Senha</Card.Title>
            <Card.Description>
              informe seu email para recuperação
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Nova Senha" color="red">
                <PasswordInput required onChange={(e) => setNewPassword(e.target.value)} placeholder="Senha" />
              </Field>
              <Field label="confirme sua Senha" color="red">
                <PasswordInput required onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Senha" />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline" onclick={goPage}>Cancel</Button>
            <Button variant="solid" onClick={sendData3}>Próximo</Button>
          </Card.Footer>
        </Card.Root>
      )}
      {step === 4 && (
        <Card.Root position="center" width="60%">
          <Card.Header>
            <Card.Title>Sucesso!</Card.Title>
            <Card.Description>
              Sua senha foi alterada com sucesso!
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <VStack>
              <Text>
                Recarregue a pagina e retorne a tela de Login.
              </Text>
              <Button onClick={goPage}>
                Pagina inicial
              </Button>
            </VStack>
          </Card.Body>
        </Card.Root>
      )}
    </AbsoluteCenter>

  );
}
