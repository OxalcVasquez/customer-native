import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Button, Card, Colors, Text, View} from 'react-native-ui-lib';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';
import { IType } from '../types/type';
import { getAllTypes } from '../api/type-service';

const HomeScreen = () => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tipoCliente, setTipoCliente] = useState({id: 0, type: ''});
    const [types, setTypes] = useState<IType[]>([]);
    const [estado, setEstado] = useState(true);

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
          selectedValue={tipoCliente}
          onValueChange={(type) => setTipoCliente(type)}>
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
        />
      </Card>
    </SafeAreaView>
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

export default HomeScreen;
