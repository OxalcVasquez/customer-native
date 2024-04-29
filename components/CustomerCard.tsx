import React, { useState } from 'react';
import {View, Text, Button, Colors, Card, Modal} from 'react-native-ui-lib';
import { ICustomer } from '../types/customer';
import { StyleSheet, TextInput  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


interface CustomerCardProps {
  customer: ICustomer,
  onDelete:(id: number) => void
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onDelete,
}) => {

   const [nombres, setNombres] = useState(customer.name);
   const [apellidos, setApellidos] = useState(customer.last_name);
   const [correo, setCorreo] = useState(customer.email);
   const [telefono, setTelefono] = useState(customer.phone);
   //const [tipoCliente, setTipoCliente] = useState({id: 0, type: ''});
   //const [types, setTypes] = useState<IType[]>([]);
   const [estado, setEstado] = useState(customer.status);

  const [openEditModal,setOpenEditModal] = useState(false);

  const handleDeleteCustomer = () => {
    onDelete(customer.id);
  };
  const handleUpdateCustomer = () => {
    setOpenEditModal(false);
  };

  const handleOpenModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseModal = () => {
    setOpenEditModal(false);
  };
  return (
    <Card flex-1 row spread margin-10 padding-10 key={customer.id}>
      <Modal visible={openEditModal}>
        <Card margin-10 padding-10>
          <Text>Actualizar clientes</Text>
          <TextInput
            value={nombres}
            onChangeText={setNombres}
            placeholder="Nombres"
            style={styles.input}
          />
          <TextInput
            value={apellidos}
            onChangeText={setApellidos}
            placeholder="Apellidos"
            style={styles.input}
          />
          <TextInput
            value={correo}
            onChangeText={setCorreo}
            placeholder="Correo"
            style={styles.input}
          />
          <TextInput
            value={telefono}
            onChangeText={setTelefono}
            placeholder="Telefono"
            style={styles.input}
          />

          <View row padding-10 style={styles.text}>
            <Text>Estado</Text>
            <CheckBox
              value={estado}
              onValueChange={status => setEstado(status)}
              onCheckColor={Colors.purple30}
            />
          </View>
          <View row center>
            <Button
              margin-10
              label="Cancelar"
              backgroundColor={Colors.grey40}
              borderRadius={10}
              onPress={handleCloseModal}
            />
            <Button
              margin-10
              label="Actualizar"
              backgroundColor={Colors.purple30}
              borderRadius={10}
              onPress={handleOpenModal}
            />
          </View>
        </Card>
      </Modal>
      <View flex-1>
        <Text text60 color={Colors.blue50}>
          {customer.name} {customer.last_name}
        </Text>
        <Text color={Colors.grey30} text70BO>
          {customer.email}
        </Text>
        <Text color={Colors.grey40} text80>
          {customer.phone}
        </Text>
        <Text>{customer.status}</Text>
        <Text>{customer.type.type}</Text>
      </View>
      <View>
        <Button
          marginB-10
          label="Editar"
          backgroundColor={Colors.$outlineWarning}
          borderRadius={10}
          onPress={handleOpenModal}
        />
        <Button
          label="Eliminar"
          backgroundColor={Colors.red30}
          borderRadius={10}
          onPress={handleDeleteCustomer}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: Colors.purple30,
  },
  text: {
    alignItems: 'center',
  },
});

export default CustomerCard;
