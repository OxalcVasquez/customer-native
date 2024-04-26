import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ICustomer } from '../types/customer';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#999',
  },
  phone: {
    fontSize: 14,
    color: '#bbb',
  },
  status: {
    fontSize: 12,
    color: '#ddd',
  },
  type: {
    fontSize: 12,
    color: '#ddd',
  },
});

interface CustomerCardProps {
  customer: ICustomer
}

export const CustomerCard: React.FC<CustomerCardProps> = ({customer}) => {

  const handleDeleteCustomer = () => {
    // tu lógica de eliminación aquí
  };

  return (
    <View style={styles.container} key={customer.id}>
      <Text style={styles.name}>
        {customer.name} {customer.last_name}
      </Text>
      <Text style={styles.email}>{customer.email}</Text>
      <Text style={styles.phone}>{customer.phone}</Text>
      <Text style={styles.status}>{customer.status}</Text>
      <Text style={styles.type}>{customer.type.type}</Text>
      <View>
        <TouchableOpacity onPress={handleDeleteCustomer}>
          Delete
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomerCard;
