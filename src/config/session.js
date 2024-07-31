import ConnectMongoDBSession from 'connect-mongodb-session';
import dotenv from 'dotenv';
dotenv.config();

import session from 'express-session';
const MongoDBStore = ConnectMongoDBSession(session)

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mondie.39z3lbi.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority&appName=Mondie`

const sessionConfig = session({
  store: new MongoDBStore({
    uri: dbURI,
    databaseName: "base-testes",
    collection: "timoteos-modas",
  }),
  secret: 'your-secret-key',  // Substitua por uma chave secreta forte
  resave: false,
  saveUninitialized: true,
  cookie: {
     maxAge: 30 * 24 * 60 * 60 * 1000,
  },
})

export default sessionConfig;
