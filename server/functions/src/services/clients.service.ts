import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { logger } from "firebase-functions/v1";
import { Client } from "./../models/interfaces/client.interface";

const db = (() => {
  initializeApp();
  return getFirestore().collection("clients");
})();

export const getAllClients = async () => {
  try {
    logger.info("Getting all docs from Clients collection..");
    const snapshot = await db.get();
    const clients = snapshot.docs.map((doc)=> {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return clients;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getOneClient = async (id: string) => {
  logger.info(`Getting doc ${id} from Clients collection..`);
  const doc = await db.doc(id).get();
  if (doc.data()) {
    return {
      id: doc.id,
      ...doc.data(),
    };
  }
  return {};
};

export const createClient = async (payload: Client) => {
  logger.info("Creating doc at Clients collection..", payload);
  const doc = await db.add({...payload});
  return {
    id: doc.id,
    ...payload,
  };
};

export const updateClient = async (id: string, payload: Client) => {
  logger.info(`Updating doc ${id} from Clients collection..`);
  await db.doc(id).update({...payload});
  return {
    id,
    ...payload,
  };
};

export const deleteClient = async (id: string) => {
  logger.info(`Deleting client ${id}`);
  await db.doc(id).delete();
  return {};
};

export const findClient = async (word: string) => {
  logger.info(`Looking for client with keyword: ${word}`);
  return word;
};

