
import cors from "cors";
import express from "express";
import { logger } from "firebase-functions/v1";
import {
  createClient, deleteClient, getAllClients, getOneClient, updateClient
} from "../services/clients.service";

const clientsController = express();
clientsController.use(cors({origin: true}));

clientsController.get("/", async (_req, res) => {
  try {
    logger.info("Clients GET method called..");
    const clients = await getAllClients();
    res.send(clients);
  } catch (err) {
    logger.error(err);
    return err;
  }
});

clientsController.get("/:id", async (req, res) => {
  try {
    logger.info(`Clients GET method called with ID: ${req.params.id}..`);
    const clients = await getOneClient(req.params.id);
    res.send(clients);
  } catch (err) {
    logger.error(err);
    return err;
  }
});

clientsController.post("/", async (req, res) => {
  try {
    logger.info("Clients POST method called..");
    const clients = await createClient();
    res.send(clients);
  } catch (err) {
    logger.error(err);
    return err;
  }
});

clientsController.put("/:id", async (req, res) => {
  try {
    logger.info(`Clients PUT method called with ID: ${req.params.id}..`);
    const clients = await updateClient(req.params.id);
    res.send(clients);
  } catch (err) {
    logger.error(err);
    return err;
  }
});

clientsController.delete("/:id", async (req, res) => {
  try {
    logger.info(`Clients DELETE method called with ID: ${req.params.id}..`);
    const clients = await deleteClient(req.params.id);
    res.send(clients);
  } catch (err) {
    logger.error(err);
    return err;
  }
});

export default clientsController;
