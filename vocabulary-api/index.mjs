import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import {readRecords} from "./records.mjs";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;

app.get('/', async (req, res) => {
    // res.json({message: 'это стартовая страница'})
    res.send(await readRecords())
})

app.listen(PORT, () => {
    console.log(`Express web server is running in ${PORT}`)
})