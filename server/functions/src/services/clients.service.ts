import { logger } from "firebase-functions/v1";

export const getAllClients = async () => {
  return "getting all clients";
};

export const getOneClient = async (id: string) => {
  logger.info(`getting client ${id}`);
  return id;
};

export const createClient = async () => {
  return "creating one client";
};

export const updateClient = async (id: string) => {
  logger.info(`updating client ${id}`);
  return id;
};

export const deleteClient = async (id: string) => {
  logger.info(`deleting client ${id}`);
  return id;
};

