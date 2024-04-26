import axios from 'axios';
import { ICustomer, ICustomerCreate, ICustomerUpdate } from '../types/customer';


const baseUrl = 'http://192.168.0.9:8080/api/customers';

export const getAllCustomers = async(): Promise<ICustomer[]> => {
  const res = await axios.get(baseUrl);
  return res.data.data;
};

export const createCustomer = async (customer: ICustomerCreate): Promise<ICustomer> => {
  const res = await axios.post(baseUrl, customer);
  return res.data;
};

export const updateCustomer = async (customer: ICustomerUpdate): Promise<ICustomer> => {
  const res = await axios.put(baseUrl, customer);
  return res.data;
};

export const deleteCustomer = async (customerId: number): Promise<void> => {
  await axios.delete(`${baseUrl}/${customerId}`);
};
