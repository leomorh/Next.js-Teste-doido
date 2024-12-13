import { AbsoluteCenter, Button, Card, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import { PasswordInput } from "./ui/password-input";
import axios from '../utils/axios'; 
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function NovaSenha() {

  const [Email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1);
  const router = useRouter();

  const sendEmail = async (Email) => {
    try {
      const response = await axios.post(`/send`, { Email });
      if (response.type === "success") {
        toast.success(response.message + " Verifique seu email!");
        setStep(2); 
      } else {
        toast.error(response.message + " Volte a página e tente novamente!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Erro ao enviar o email!");
    }
  }

  const sendCode = async () => {
    try {
      const response = await axios.post(`/code`, { Email, code });
      if (response.type === "success") {
        toast.success(response.message + " Troque sua senha!");
        setStep(3); 
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Erro ao enviar o código!");
    }
  }

  const sendPassword = async () => {
    try {
      if (newPassword === ConfirmPassword) {
        const response = await axios.post(`/newPassword`, { Email, newPassword });
        if (response.type === "info") {
          toast.success(response.message + " " + "Voltando a página inicial!");
          await setStep(4);
          await router.push("/");
        } else {
          toast.error(response.message);
        }
      } else {
        toast.error("Senhas diferentes informadas");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Erro ao atualizar a senha!");
    }
  }

  const goPage = () => {
    router.push('/');
  }

  return (
    <AbsoluteCenter w="100%" h="100%">
      {step === 1 && (
        <Card.Root width="60%" size='lg'>
          <Card.Header>
            <Card.Title>Nova Senha</Card.Title>
            <Card.Description>
              Informe seu email para recuperação
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Email" color="red">
                <Input errorText="Este campo é obrigatório" required onChange={(e) => setEmail(e.target.value)} placeholder="eu@exemplo.com" />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline" onClick={goPage}>Cancelar</Button>
            <Button variant="solid" onClick={() => sendEmail(Email)}>Próximo</Button>
          </Card.Footer>
        </Card.Root>
      )}
      {step === 2 && (
        <Card.Root width="60%">
          <Card.Header>
            <Card.Title>Nova Senha</Card.Title>
            <Card.Description>
              Informe o código de acesso
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Código" color="red">
                <Input required onChange={(e) => setCode(e.target.value)} placeholder="9999" />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline" onClick={goPage}>Cancelar</Button>
            <Button variant="outline" onClick={() => setStep(1)}>Anterior</Button>
            <Button variant="solid" onClick={sendCode}>Próximo</Button>
          </Card.Footer>
        </Card.Root>
      )}
      {step === 3 && (
        <Card.Root width="60%">
          <Card.Header>
            <Card.Title>Nova Senha</Card.Title>
            <Card.Description>
              Informe sua nova senha
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap="4" w="full">
              <Field label="Nova Senha" color="red">
                <PasswordInput required onChange={(e) => setNewPassword(e.target.value)} placeholder="Senha" />
              </Field>
              <Field label="Confirme sua Senha" color="red">
                <PasswordInput required onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Senha" />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <Button variant="outline" onClick={goPage}>Cancelar</Button>
            <Button variant="outline" onClick={() => setStep(2)}>Anterior</Button>
            <Button variant="solid" onClick={sendPassword}>Próximo</Button>
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
          </Card.Body>
        </Card.Root>
      )}
      <ToastContainer />
    </AbsoluteCenter>
  );
}


