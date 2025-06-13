import express  from "express";
import cors     from "cors";
import config from './configs/db-configs.js'
import pkg from 'pg'

import {StatusCodes} from "http-status-codes";


const { Client }  = pkg;

const app  = express();
const port = 3000;

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

// Acá abajo poner todos los EndPoints
// (por ejemplo)
app.get('/api/alumnos/', async (req, res) => {
    const client = new Client(config);

    try{
        await client.connect();
        const sqlQuery = "SELECT * from alumnos";
        const resultadoPg = await client.query(sqlQuery);
        res.status(StatusCodes.OK).json(resultadoPg.rows);
    }catch(error){
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error:vnjenv`);
    }finally{
        await client.end();
    }

})
/* app.get('/api/alumnos/:id', async (req, res) => {
    
}
app.post('/api/alumnos/', async (req, res) => {...}
app.put('/api/alumnos/', async (req, res) => {...}
app.delete('/api/alumnos/:id', async (req, res) => {...}

*/
// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});