import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {deleteCustomer, getAllCustomers} from '../api/customer-service';
import {ICustomer} from '../types/customer';
import CustomerCard from '../components/CustomerCard';

function ListScreen() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const customersRequest = await getAllCustomers();
      setCustomers(customersRequest);
    };

    fetchCustomers();
  }, []);

  console.log(customers);

  const handleDeleteCustomer = async (id: number) => {
    await deleteCustomer(id);
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {customers.map(customer => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            onDelete={handleDeleteCustomer}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListScreen;
