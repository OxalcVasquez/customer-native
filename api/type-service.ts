import { IType } from '../types/type';

import axios from 'axios';

const baseUrl = 'http://192.168.0.9:8080/api/types';

export const getAllTypes = async(): Promise<IType[]> => {
  const res = await axios.get(baseUrl);
  return res.data.data;
};
