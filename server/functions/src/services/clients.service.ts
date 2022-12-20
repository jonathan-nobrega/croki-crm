import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { logger } from "firebase-functions/v1";
import { Client } from "./../models/interfaces/client.interface";

initializeApp();
const db = getFirestore().collection("clients");

export const getAllClients = async () => {
  logger.info("Getting all docs from Clients collection..");
  const snapshot = await db.get();
  const clients = snapshot.docs.map((doc)=> {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return clients;
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
  // console.log(payload);
  // console.log(doc);
  // if (doc.data()) {
  //   return {
  //     id: doc.id,
  //     ...doc.data(),
  //   };
  // }
  return doc;
};

export const updateClient = async (id: string) => {
  logger.info(`Updating doc ${id} from Clients collection..`);
  return id;
};

export const deleteClient = async (id: string) => {
  logger.info(`Deleting client ${id}`);
  return id;
};

export const findClient = async (word: string) => {
  logger.info(`Looking for client with keyword: ${word}`);
  return word;
};

