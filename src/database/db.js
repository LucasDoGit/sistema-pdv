import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';

const dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mondie.39z3lbi.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority&appName=Mondie`

async function connectToDatabase() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(dbURI);
        console.log(`Conectado ao MongoDB, base de dados: ${process.env.DB_COLLECTION}`);
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
};

export default connectToDatabase;
