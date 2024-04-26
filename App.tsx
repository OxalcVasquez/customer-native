/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import { getAllCustomers } from './api/customer-service';
import { ICustomer } from './types/customer';
import CustomerCard from './components/CustomerCard';

function App() {

  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customersRequest = await getAllCustomers();
      setCustomers(customersRequest);
    };

    fetchCustomers();
  }, []);

  console.log(customers);

  return (
    <SafeAreaView>
      <Text style={styles.textMain}>Lista de clientes</Text>
      <ScrollView>
        {customers.map(customer => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textMain: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
