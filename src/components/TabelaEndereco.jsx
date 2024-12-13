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
import { withMask } from 'use-mask-input';

const Tabela = ({ data = [], handleDataFromParent, delData }) => {
  const [State, setState] = useState('');
  const [Zipcode, setZipcode] = useState('');
  const [Street, setStreet] = useState('');
  const [District, setDistrict] = useState('');
  const [City, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const [id, setID] = useState(null);
  const [Number, setNumber] = useState('');
  const [Complement, setComplement] = useState('');
  const [editingItem, setEditingItem] = useState(true);
  const endereco = { Zipcode, State, Street, City, District, Number, Complement };
  const enderecoID = { ...endereco, id };
  let zipcode = Zipcode;
  let state = State;
  let city = City;
  let street = Street;
  let district = District;
  let number = Number;
  let complement = Complement;


  const pageSize = 15;
  const [page, setPage] = useState(1);

  const visibleItems = data.slice((page - 1) * pageSize, page * pageSize);

  const itemsetter = async () => {
    zipcode = Zipcode;
    state = State;
    city = City;
    street = Street;
    district = District;
    number = Number;
    complement = Complement;
  }



  const handleSubmit = async () => {

    if (enderecoID.id) {
      await handleDataFromParent(enderecoID);
    } else {
      await handleDataFromParent(endereco);
    }
    setOpen(false);
  };

  const delet = async (id) => {
    await delData(id);
  };

  const openDialog = async (item) => {
    if (item) {
      setEditingItem(true);
      setState(item.State);
      setZipcode(item.Zipcode);
      setStreet(item.Street);
      setDistrict(item.District);
      setCity(item.City);
      setID(item.id);
      setComplement(item.Complement);
      setNumber(item.Number);
    } else {
      setEditingItem(false);
      setState('');
      setZipcode('');
      setStreet('');
      setDistrict('');
      setCity('');
      setComplement('');
      setNumber('');
    }
    await setOpen(true);
  };


  return (
    <Box>
      <Stack gap="2">
        <Box gap="2" >
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
                <DialogTitle color="red">CRIE/EDITE UM ENDEREÇO</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <Box>
                  <Grid width="full" maxHeight="30%" gap="2" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)">
                    <GridItem invalid label="CEP" errorText="This field is required" colSpan={5} width="full" height="25%" rowSpan="full"><Input required value={zipcode} onChange={(e) => setZipcode(e.target.value)} ref={withMask("99999-999")} placeholder="CEP" /></GridItem>
                    <GridItem colSpan={5}><Input required value={state} onChange={(e) => setState(e.target.value)} placeholder="Estado" ref={withMask("AA")} /></GridItem>
                    <GridItem colSpan={5}><Input required value={city} onChange={(e) => setCity(e.target.value)} placeholder="cidade" /></GridItem>
                    <GridItem colSpan={5}><Input required value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="Bairro" /></GridItem>
                    <GridItem colSpan={3}><Input required value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Rua" /></GridItem>
                    <GridItem colSpan={1}><Input required value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Numero" /></GridItem>
                    <GridItem colSpan={1}><Input required value={complement} onChange={(e) => setComplement(e.target.value)} placeholder="Complemento" /></GridItem>
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
              <Table.ColumnHeader>CEP</Table.ColumnHeader>
              <Table.ColumnHeader>Estado</Table.ColumnHeader>
              <Table.ColumnHeader>Cidade</Table.ColumnHeader>
              <Table.ColumnHeader>Bairro</Table.ColumnHeader>
              <Table.ColumnHeader>Rua</Table.ColumnHeader>
              <Table.ColumnHeader>Numero</Table.ColumnHeader>
              <Table.ColumnHeader>Complemento</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body maxHeight="70vh" overflowY="auto">
            {visibleItems.map((item) => (
              <Table.Row maxHeight="2%" key={item.id}>
                <Table.Cell width="5%">{item.id}</Table.Cell>
                <Table.Cell width="10%">{item.Zipcode}</Table.Cell>
                <Table.Cell width="10%">{item.State}</Table.Cell>
                <Table.Cell width="15%">{item.City}</Table.Cell>
                <Table.Cell width="20%">{item.District}</Table.Cell>
                <Table.Cell width="20%">{item.Street}</Table.Cell>
                <Table.Cell width="5%">{item.Number}</Table.Cell>
                <Table.Cell width="5%">{item.Complement}</Table.Cell>
                <Table.Cell textAlign={'end'}>
                  <Tooltip content="editar" interactive positioning={{ placement: "left-end" }} contentProps={{ css: { "--tooltip-bg": "green" } }}>
                    <Icon onClick={() => { openDialog(item), itemsetter() }} cursor="pointer" size={'sm'} fontSize="2xl" color="green.700">
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
        <PaginationRoot
          count={data.length}
          onPageChange={(e) => setPage(e.page)}
          defaultPage={1}
        >
          <HStack>
            <PaginationPrevTrigger onClick={() => setPage(prev => Math.max(prev - 1, 1))} />
            <PaginationItems />
            <PaginationNextTrigger onClick={() => setPage(prev => Math.min(prev + 1, Math.ceil(data.length / pageSize)))} />
          </HStack>
        </PaginationRoot>
      </Stack>
    </Box>
  );
};

export default Tabela




