import express from "express";
// import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

/**
 * Having some trouble here.
 * Work on documentation!
 */

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Croki CRM API",
//       version: "1.0.0",
//     },
//   },
//   apis: ["./**/*.{js,ts,jsx,tsx}"],
// };
// const swaggerSpec = swaggerJSDoc(options);
// swagger.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const swagger = express();
swagger.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default swagger;
