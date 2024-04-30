import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Button, Card, Colors, Text, TextField, View} from 'react-native-ui-lib';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import { IType } from '../types/type';
import { getAllTypes } from '../api/type-service';
import { createCustomer } from '../api/customer-service';
//import { useNavigation } from '@react-navigation/native';
import { showToast } from '../utils/toasts-utils';

const HomeScreen = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tipoCliente, setTipoCliente] = useState({id: 1, type: ''});
    const [types, setTypes] = useState<IType[]>([]);
    const [estado, setEstado] = useState(true);

    //const navigation = useNavigation();

     const handleCreateCustomer = async () => {

      if (validateFields()) {
         const newCustomer = await createCustomer({
            name: nombres,
            last_name: apellidos,
            email: correo,
            phone: telefono,
            status: estado,
            type_id: tipoCliente.id,
          });
          console.log(newCustomer);
          clearFields();
          if (newCustomer === null){
              showToast('Sucedio un error creando el cliente', 'error');
          } else {
             showToast('Cliente creado', 'success');
          }
          //navigation.navigate('Clientes');
      } else {
          showToast('Por favor completar los campos obligatorios', 'error');
      }


     };

      console.log(tipoCliente.id);


      const clearFields = () => {
        setNombres('');
        setApellidos('');
        setCorreo('');
        setTelefono('');
        setEstado(true);
        setTipoCliente({id: 0, type: ''});
      };

      const validateFields = ()  => {
        return nombres !== '' && apellidos !== '' && correo !== '';
      };

    useEffect(() => {
        const fetchTypes = async () => {
          const typesRequest = await getAllTypes();
          setTypes(typesRequest);
        };

        fetchTypes();
      }, []);

  return (
    <SafeAreaView>
      <Card margin-10 padding-10>
        <Text>Registro de clientes</Text>
        <TextField
          showMandatoryIndication
          floatingPlaceholder
          value={nombres}
          style={styles.input}
          validateOnBlur
          onChangeText={setNombres}
          placeholder="Nombres"
          enableErrors
          useCustomErrors
          validate={['required', (value: string) => value.length > 2]}
          validationMessage={['Nombre es requerido', 'Nombre es muy corto']}
          floatingPlaceholderColor={Colors.purple30}
        />
        <TextField
          showMandatoryIndication
          floatingPlaceholder
          value={apellidos}
          onChangeText={setApellidos}
          placeholder="Apellidos"
          style={styles.input}
          validateOnBlur
          enableErrors
          useCustomErrors
          validate={['required', (value: string) => value.length > 2]}
          validationMessage={['Apellido es requerido', 'Apellido es muy corto']}
          floatingPlaceholderColor={Colors.purple30}
        />
        <TextField
          showMandatoryIndication
          floatingPlaceholder
          value={correo}
          onChangeText={setCorreo}
          placeholder={'Correo'}
          style={styles.input}
          validateOnBlur
          enableErrors
          useCustomErrors
          validate={['required', 'email', (value: string) => value.length > 6]}
          validationMessage={['Correo es requerido', 'Correo no es válido']}
          floatingPlaceholderColor={Colors.purple30}
        />
        <TextField
          floatingPlaceholder
          value={telefono}
          onChangeText={setTelefono}
          placeholder="Telefono"
          style={styles.input}
          floatingPlaceholderColor={Colors.purple30}
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
        <Button
          margin-10
          label="Agregar cliente"
          backgroundColor={Colors.purple30}
          borderRadius={10}
          onPress={handleCreateCustomer}
        />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
   // height: 40,
  //  margin: 12,
  //  borderWidth: 1,
  //  padding: 10,
  //  borderRadius: 5,
   // backgroundColor: 'white',
   // borderColor: Colors.purple30,
  },
  text: {
    alignItems: 'center',
  },
});

export default HomeScreen;
