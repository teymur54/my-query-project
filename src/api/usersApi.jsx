import axios from "axios";

const BASE_URL = 'http://172.16.4.226:8080/api/';

export const fetchEmployees = async () => {
  const response = await axios.get(`${BASE_URL}employees`);
  return response.data;
}

export const createUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}add`,userData);
  return response.data;
}

export const updateUser = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}update/${id}`,updatedData);
  return response.data;
}

export const deleteUser = async (id) => {
    await axios.delete(`${BASE_URL}delete/${id}`);
}

export const fetchDepartments = async (id) => {
  const response = await axios.get(`${BASE_URL}departments`);
  return response.data; 
}

export const fetchPositions = async (id) => {
  const response = await axios.get(`${BASE_URL}positions`);
  return response.data
}

export const fetchRanks = async (id) => {
  const response = await axios.get(`${BASE_URL}ranks`);
  return response.data
}