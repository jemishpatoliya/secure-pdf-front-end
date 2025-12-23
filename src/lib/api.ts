import axios from 'axios';
import { BACKEND_URL } from './backendUrl';

export const api = axios.create({
  baseURL: BACKEND_URL,
});
