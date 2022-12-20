// import { initializeApp } from "firebase-admin/app";
import * as functions from "firebase-functions";
import clientsController from "./controllers/clients.controller";
import swagger from "./documentation/swagger.controller";

// initializeApp();


export const ping = functions.https.onRequest((_request, response) => {
  functions.logger.info("Ping!", {structuredData: true});
  response.send("Ping!");
});

export const clients = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Clients route started..");
  const controller = await clientsController(request, response);
  return controller;
});

// having some trouble with swagger + firebase
export const documentation = functions.https.onRequest(
    async (request, response) => {
      functions.logger.info("Documentation started..");
      const docs = await swagger(request, response);
      console.log(docs);
      return docs;
    }
);
