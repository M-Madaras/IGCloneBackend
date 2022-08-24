import express from 'express';
import cors from 'cors';
import { photosRouter } from './src/routers/photo-router';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/photos', photosRouter);

const PORT = 5001;

app.listen(PORT, () =>{
    console.log("we started on port", PORT )
});