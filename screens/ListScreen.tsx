import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {deleteCustomer, getAllCustomers} from '../api/customer-service';
import {ICustomer} from '../types/customer';
import CustomerCard from '../components/CustomerCard';
import { IType } from '../types/type';
import { getAllTypes } from '../api/type-service';
import { useFocusEffect } from '@react-navigation/native';

function ListScreen() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [types, setTypes] = useState<IType[]>([]);

  const fetchCustomers = async () => {
       const customersRequest = await getAllCustomers();
       setCustomers(customersRequest);
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCustomers();
      const fetchTypes = async () => {
        const typesRequest = await getAllTypes();
        setTypes(typesRequest);
      };

      fetchTypes();
      fetchCustomers();
    }, []),
  );

  console.log(customers);

  const handleDeleteCustomer = async (id: number) => {
    await deleteCustomer(id);
    fetchCustomers();

  };

   const handleUpdateCustomer = async () => {
     fetchCustomers();
   };

  return (
    <SafeAreaView>
      <ScrollView>
        {customers.map(customer => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            onDelete={handleDeleteCustomer}
            onUpdate={handleUpdateCustomer}
            types={types}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListScreen;
