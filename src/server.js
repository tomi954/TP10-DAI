import express  from "express";
import cors     from "cors";
import config from './configs/db-config.js'
import pkg from 'pg'


const { Client }  = pkg;

const app  = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/api/alumnos/', async (req, res) => {...}
app.get('/api/alumnos/:id', async (req, res) => {...}
app.post('/api/alumnos/', async (req, res) => {...}
app.put('/api/alumnos/', async (req, res) => {...}
app.delete('/api/alumnos/:id', async (req, res) => {...}

app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)

});