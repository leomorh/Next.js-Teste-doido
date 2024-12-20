import { Table, Box, Button, Icon, Grid, GridItem, Input, Stack } from '@chakra-ui/react';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { HStack } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
import { PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot, PaginationItems } from '@/components/ui/pagination';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const TabelaUsuario = ({ data = [], handleDataFromParent, delData }) => {
  const [Name, setName] = useState('');
  const [Username, setUsername] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Cpf, setCpf] = useState('');
  const [Password, setPassword] = useState('');
  const [id, setID] = useState(null);
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(true);

  const pageSize = 15;
  const [page, setPage] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / pageSize); 
  const visibleItems = data.slice((page - 1) * pageSize, page * pageSize);

  const handleSubmit = async () => {
    const user = { Username, Name, Phone, Email, Cpf, Password, id };
    await handleDataFromParent(user);
    setOpen(false);
  };

  const delet = async (id) => {
    await delData(id);
  };

  const openDialog = (item) => {
    if (item) {
      setEditingItem(true);
      setName(item.Name);
      setUsername(item.Username);
      setPhone(item.Phone);
      setEmail(item.Email);
      setCpf(item.Cpf);
      setID(item.id);
    } else {
      setEditingItem(false);
      setName('');
      setUsername('');
      setPhone('');
      setEmail('');
      setCpf('');
    }
    setOpen(true);
  };

  return (
    <Box>
      <Stack gap="2">
        <Box gap="2">
          <Tooltip content="Crie um endereço" interactive positioning={{ placement: "left-end" }} contentProps={{ css: { "--tooltip-bg": "green" } }}>
            <Button backgroundColor="green" onClick={() => openDialog(null)} float="right">
              <IoIosAddCircleOutline color="lightgreen" />
            </Button>
          </Tooltip>
        </Box>
        <Box float="right">
          <DialogRoot size="lg" closeOnInteractOutside open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogContent>
              <DialogCloseTrigger />
              <DialogHeader>
                <DialogTitle color="red">CRIE/EDITE UM USUARIO</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <Box>
                  <Grid width="full" maxHeight="30%" gap="2" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)">
                    <GridItem colSpan={5}><Input required value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" /></GridItem>
                    <GridItem colSpan={5}><Input required value={Username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" /></GridItem>
                    <GridItem colSpan={5}><Input required value={Cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" /></GridItem>
                    <GridItem colSpan={5}><Input required value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder="Numero de telefone" /></GridItem>
                    <GridItem colSpan={5}><Input required value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /></GridItem>
                    <GridItem colSpan={5}><Input required value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" /></GridItem>
                  </Grid>
                  <DialogCloseTrigger width="40%" height="30%" float="right" position="bottom">
                    <Button width="100%" variant="surface" colorPalette="red" onClick={handleSubmit}>Cadastrar</Button>
                  </DialogCloseTrigger>
                </Box>
              </DialogBody>
              <DialogFooter></DialogFooter>
            </DialogContent>
          </DialogRoot>
        </Box>

        <Table.Root striped maxHeight="70vh" overflow="auto">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>id</Table.ColumnHeader>
              <Table.ColumnHeader>Nome</Table.ColumnHeader>
              <Table.ColumnHeader>Usuario</Table.ColumnHeader>
              <Table.ColumnHeader>CPF</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Senha</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {visibleItems.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.Name}</Table.Cell>
                <Table.Cell>{item.Username}</Table.Cell>
                <Table.Cell>{item.Cpf}</Table.Cell>
                <Table.Cell>{item.Email}</Table.Cell>
                <Table.Cell>{item.PasswordHash}</Table.Cell>
                <Table.Cell textAlign="end">
                  <Tooltip content="editar" interactive positioning={{ placement: "left-end" }} contentProps={{ css: { "--tooltip-bg": "green" } }}>
                    <Icon onClick={() => openDialog(item)} cursor="pointer" size={'sm'} fontSize="2xl" color="green.700">
                      <FaPen />
                    </Icon>
                  </Tooltip>
                  <Tooltip content="deletar" interactive positioning={{ placement: "left-end" }} contentProps={{ css: { "--tooltip-bg": "tomato" } }}>
                    <Icon cursor="pointer" onClick={() => delet(item.id)} size={'medium'} fontSize="2xl" color="red.700">
                      <MdDelete />
                    </Icon>
                  </Tooltip>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <PaginationRoot count={totalItems} pageSize={pageSize} currentPage={page} onPageChange={(e) => setPage(e.page)}>
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Stack>
    </Box>
  );
};

export default TabelaUsuario;





