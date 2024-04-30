import { ICustomer, ICustomerCreate, ICustomerUpdate } from '../types/customer';

const baseUrl = 'http://192.168.0.9:8585/api/customers';

export const getAllCustomers = async ():Promise<ICustomer[]> => {
  const res = await fetch(`${baseUrl}`);
  const customers = await res.json();
  return customers.data;
};

export const createCustomer = async (customer: ICustomerCreate):Promise<ICustomer>=> {
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  });

  const newCustomer = await res.json();

  return newCustomer.data;
};

export const updateCustomer = async (customer: ICustomerUpdate):Promise<ICustomer>=> {
  const res = await fetch(`${baseUrl}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  });

  const updatedCustomer = await res.json();

  return updatedCustomer;
};

export const deleteCustomer = async (customerId : number):Promise<void>=> {
   await fetch(`${baseUrl}/${customerId}`, {
    method: 'DELETE',
  });

};
