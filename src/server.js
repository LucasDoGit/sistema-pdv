import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import nunjucks from 'nunjucks'
import cors from 'cors';
import bodyParser from 'body-parser';
import methodOverride from 'method-override'
import sessionConfig from './config/session.js';
import path from 'path';
import connectToDatabase from './database/db.js';
import routes from './routes.js'

const server = express();
server.use(cors());

server.use(express.static("public"));

await connectToDatabase();

server.use(sessionConfig);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(methodOverride("_method"));

// nunjucks.configure(__dirname + "views"), {
//   watch: true,
//   express: server,
//   autoescape: true,
// };

nunjucks.configure('src/views', {
  watch: true,
  express: server,
  autoescape: true
});

server.set("view engine", "njk");
server.use(routes);

server.listen(process.env.PORT || 3002);
