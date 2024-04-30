import React, { useState } from 'react';
import {View, Text, Button, Colors, Card, Modal} from 'react-native-ui-lib';
import { ICustomer } from '../types/customer';
import { StyleSheet, TextInput  } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { updateCustomer } from '../api/customer-service';
import { IType } from '../types/type';
import { Picker } from '@react-native-picker/picker';
import { showToast } from '../utils/toasts-utils';
import Toast from 'react-native-toast-message';


interface CustomerCardProps {
  customer: ICustomer;
  onDelete: (id: number) => void;
  onUpdate: () => void;
  types: IType[];
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onDelete,
  onUpdate,
  types,
}) => {

   const [nombres, setNombres] = useState(customer.name);
   const [apellidos, setApellidos] = useState(customer.last_name);
   const [correo, setCorreo] = useState(customer.email);
   const [telefono, setTelefono] = useState(customer.phone);
   const [tipoCliente, setTipoCliente] = useState({id: 1, type: ''});


   const [estado, setEstado] = useState(customer.status);

   const [openEditModal,setOpenEditModal] = useState(false);

  const handleDeleteCustomer = () => {
    onDelete(customer.id);
  };
  const handleUpdateCustomer =  async () => {
    if (validateFields()) {
       await updateCustomer({
         id: customer.id,
         name: nombres,
         last_name: apellidos,
         email: correo,
         phone: telefono,
         status: estado,
         type_id: tipoCliente.id,
       });
        showToast('Cliente actualizado', 'info');
         onUpdate();
        setOpenEditModal(false);
    } else {
      showToast('Por favor completar los campos obligatorios','error');
    }

  };


  const validateFields = () => {
        return nombres !== '' && apellidos !== '' && correo !== '';
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
          <Picker
            selectedValue={tipoCliente.id}
            onValueChange={(itemValue, itemIndex) => {
              const selectedType = types[itemIndex];
              setTipoCliente({id: selectedType.id, type: selectedType.type});
            }}>
            {types.map(type => (
              <Picker.Item key={type.id} label={type.type} value={type.id} />
            ))}
          </Picker>
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
              onPress={handleUpdateCustomer}
            />
          </View>
        </Card>
        <Toast />
      </Modal>
      <View flex-1>
        <Text text60 color={Colors.purple30}>
          {customer.name} {customer.last_name}
        </Text>
        <Text color={Colors.grey30} text70BO>
          {customer.email}
        </Text>
        <Text color={Colors.grey40} text80>
          {customer.phone}
        </Text>

        {customer.status ? (
          <Text color={Colors.green30}>Activo</Text>
        ) : (
          <Text color={Colors.red30}>Inactivo</Text>
        )}

        {customer.type.type === 'PREMIUN' ? (
          <Text color={Colors.blue30}>{customer.type.type}</Text>
        ) : (
          <Text color={Colors.grey30}>{customer.type.type}</Text>
        )}
      </View>
      <View center>
        <Button
          marginB-10
          medium
          label="Editar"
          backgroundColor={Colors.green30}
          borderRadius={10}
          onPress={handleOpenModal}
          style={styles.button} // Ajusta estos valores según tus necesidades
        />
        <Button
          medium
          label="Eliminar"
          backgroundColor={Colors.red30}
          borderRadius={10}
          style={styles.button} // Ajusta estos valores según tus necesidades
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
  button:{
    width:120 ,
  },
});

export default CustomerCard;
