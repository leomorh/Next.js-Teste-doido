import { Table, Box, Button, Icon, Grid, GridItem, Input, Field, Stack, Card } from '@chakra-ui/react';
import { FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { HStack } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui/tooltip';
import { PaginationItems, PaginationNextTrigger, PaginationPrevTrigger, PaginationRoot } from '@/components/ui/pagination';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { withMask } from 'use-mask-input';



const Tabela = ({ data = [], handleDataFromParent, delData }) => {


  const [state, setState] = useState('');
  const [zip_code, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  const endereco = { state, zip_code, street, city, district };
  const handleSubmit = () => {
    handleDataFromParent(endereco);
  }

  const delet =(id)=> {
    delData(id)
  }

  return (
    <Box>
      <Box float="right">
        <DialogRoot size="lg" closeOnInteractOutside>
          <DialogTrigger>
            <Tooltip content="crie um endereço" interactive positioning={{ placement: "left-end" }} contentProps={{ css: { "--tooltip-bg": "green" } }} >
              <Button backgroundColor="green">
                <IoIosAddCircleOutline color="lightgreen" />
              </Button>
            </Tooltip>
          </DialogTrigger>
          <DialogContent>
          <DialogCloseTrigger/>
            <DialogHeader>
              <DialogTitle color="red">CRIE UM ENDEREÇO</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <Box>
                <Grid width="full" height="30%" gap="2" templateRows="repeat(3, 1fr)" templateColumns="repeat(5, 1fr)">
                  <GridItem colSpan={5} width="full" height="25%" rowSpan="full"><Input onChange={(e) => setZipcode(e.target.value)} ref={withMask("99999-9999")} placeholder="CEP" /></GridItem>
                  <GridItem colSpan={5}><Input onChange={(e) => setState(e.target.value)} placeholder="Estado" ref={withMask("AA")} /></GridItem>
                  <GridItem colSpan={5}><Input onChange={(e) => setCity(e.target.value)} placeholder="cidade" /></GridItem>
                  <GridItem colSpan={5}><Input onChange={(e) => setDistrict(e.target.value)} placeholder="Bairro" /></GridItem>
                  <GridItem colSpan={3}><Input onChange={(e) => setStreet(e.target.value)} placeholder="Rua" /></GridItem>
                  <GridItem colSpan={2}><Input placeholder="complemento" /></GridItem>
                </Grid>
                <DialogCloseTrigger  width="40%" height="30%" float="right" position="bottom">
                  <Button width="100%" variant="surface" colorPalette="red" onClick={handleSubmit}>Cadastrar</Button>
                </DialogCloseTrigger>
              </Box>
            </DialogBody>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
        </DialogRoot>
      </Box>
      <Table.Root striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>id</Table.ColumnHeader>
            <Table.ColumnHeader>CEP</Table.ColumnHeader>
            <Table.ColumnHeader>Estado</Table.ColumnHeader>
            <Table.ColumnHeader>Cidade</Table.ColumnHeader>
            <Table.ColumnHeader>Rua</Table.ColumnHeader>
            <Table.ColumnHeader>Bairro</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end"></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.zip_code}</Table.Cell>
              <Table.Cell>{item.state}</Table.Cell>
              <Table.Cell>{item.city}</Table.Cell>
              <Table.Cell>{item.street}</Table.Cell>
              <Table.Cell>{item.district}</Table.Cell>
              <Table.Cell textAlign={'end'}>
                <Tooltip content="editar" interactive positioning={{ placement: "left-end" }} contentProps={{ css: { "--tooltip-bg": "green" } }} >
                  <Icon cursor="pointer" onClick={() => alert(item.id)} size={'sm'} fontSize="2xl" color="green.700">
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
      <PaginationRoot count={20} pageSize={2} defaultPage={1}>
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Box>
  );
};


export default Tabela;


