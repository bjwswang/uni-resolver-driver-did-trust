import express,{
  Response as ExResponse
} from "express";
import bodyParser from "body-parser";

import swaggerUI from 'swagger-ui-express'
import * as swaggerDocument from './swagger/swagger.json'

import { RegisterRoutes } from "./routes/routes";

export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});
