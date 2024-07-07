import express, { Request, Response } from "express";
import connectDB from "./config/database";
import * as dotenv from 'dotenv';
import userRoutes from './routes/userRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/productRoutes'
import path from 'path';
import cors from 'cors';

dotenv.config();


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true , limit:"500mb"}));
app.use(cors())

app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes)
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));



connectDB().then(() => {

    app.listen(port, () => {
        console.log(`Server is On At Port 3000`);

    })
}).catch((error: any) => {
    console.log("Error starting server :", error.message);
});