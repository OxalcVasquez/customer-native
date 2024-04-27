import React from 'react';
import {View, Text, Button, Colors, Card} from 'react-native-ui-lib';
import { ICustomer } from '../types/customer';


interface CustomerCardProps {
  customer: ICustomer,
  onDelete:(id: number) => void
}

export const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  onDelete,
}) => {
  const handleDeleteCustomer = () => {
    onDelete(customer.id);
  };

  return (
    <Card flex-1 row spread margin-10 padding-10 key={customer.id}>
      <View flex-1>
        <Text text60 color={Colors.blue50}>
          {customer.name} {customer.last_name}
        </Text>
        <Text color={Colors.grey30} text70BO>{customer.email}</Text>
        <Text color={Colors.grey40} text80>{customer.phone}</Text>
        <Text>{customer.status}</Text>
        <Text>{customer.type.type}</Text>
      </View>
      <View>
        <Button
          marginB-10
          label="Editar"
          backgroundColor={Colors.$outlineWarning}
          borderRadius={10}
          onPress={handleDeleteCustomer}
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
export default CustomerCard;
