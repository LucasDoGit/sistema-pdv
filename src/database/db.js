import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.DB_URL);
        console.log(`Sucesso ao conectar ao banco de dados`);
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
};

export default connectToDatabase;
