import * as functions from "firebase-functions";
import clientsController from "./controllers/clients.controller";


export const ping = functions.https.onRequest((_request, response) => {
  functions.logger.info("Ping!", {structuredData: true});
  response.send("Ping!");
});

export const clients = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Clients route started..");
  const controller = await clientsController(request, response);
  return controller;
});
