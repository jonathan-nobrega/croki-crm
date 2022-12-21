/* eslint-disable comma-dangle */

import cors from "cors";
import express from "express";
import { logger } from "firebase-functions/v1";
import { validateClient } from "../middleware/client.validate";
import {
  createClient, deleteClient, getAllClients, getOneClient, updateClient
} from "../services/clients.service";

const clientsController = express();
clientsController.use(cors({origin: true}));

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
clientsController.get("/", async (_req, res) => {
  try {
    logger.info("Clients GET method called..");
    const clients = await getAllClients();
    res.send(clients);
  } catch (err) {
    logger.error(err);
    res.status(400).send(err);
  }
});

clientsController.get("/:id", async (req, res) => {
  try {
    logger.info(`Clients GET method called with ID: ${req.params.id}..`);
    const clients = await getOneClient(req.params.id);
    res.send(clients);
  } catch (err) {
    logger.error(err);
    res.status(400).send(err);
  }
});

clientsController.post("/", validateClient, async (req, res) => {
  try {
    logger.info("Clients POST method called..");
    const clients = await createClient(req.body);
    res.status(201).send(clients);
  } catch (err) {
    logger.error(err);
    res.status(400).send(err);
  }
});

clientsController.put("/:id", async (req, res) => {
  try {
    logger.info(`Clients PUT method called with ID: ${req.params.id}..`);
    const clients = await updateClient(req.params.id, req.body);
    res.status(202).send(clients);
  } catch (err) {
    logger.error(err);
    res.status(400).send(err);
  }
});

clientsController.delete("/:id", async (req, res) => {
  try {
    logger.info(`Clients DELETE method called with ID: ${req.params.id}..`);
    await deleteClient(req.params.id);
    res.status(204).send("Document deleted sucessfully");
  } catch (err) {
    logger.error(err);
    res.status(400).send(err);
  }
});

export default clientsController;
