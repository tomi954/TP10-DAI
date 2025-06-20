import express  from "express";
import cors     from "cors";
import config from './configs/db-configs.js'
import pkg from 'pg'

import {StatusCodes} from "http-status-codes";

//import ValidacionesHelper from './src/modules/validaciones-helper.js'



const { Client }  = pkg;

const app  = express();
const port = 3000;

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

// Acá abajo poner todos los EndPoints
// (por ejemplo)
app.get('/', async (req, res) => 
{
   res.send('Hello World')

})

app.get('/api/alumnos/', async (req, res) => 
{
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
app.get('/api/alumnos/:id', async (req, res) => 
{   
    const id = req.params.id
    if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).send('El ID debe ser numérico'); //este es el 404
    }
    const client = new Client(config);
    try {
        await client.connect()
        const sqlQuery = 'SELECT * FROM alumnos WHERE id = $1';
        const values = [id];
        const resultadoPg = await client.query(sqlQuery, values);
        if (resultadoPg.rowCount === 0) {
            return res.status(StatusCodes.NOT_FOUND).send(`No se encontró un alumno con id ${id}`); //el 400
        }
        res.status(StatusCodes.OK).json(resultadoPg.rows[0]); // el 200
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error: 500`);
    } finally {
        await client.end();
    }
})
app.post('/api/alumnos/', async (req, res) => 
{
     const client = new Client(config);
    const { nombre, apellido, id_curso, fecha_nacimiento, hace_deportes } = req.body;
    if (!nombre || nombre.length < 3) return res.status(StatusCodes.BAD_REQUEST).send('Nombre inválido'); //Puede decir delete alumnos --> hay que verificar que no lo diga
    if (!apellido || apellido.length < 3) return res.status(StatusCodes.BAD_REQUEST).send('Apellido inválido');
    if (!fecha_nacimiento || fecha_nacimiento.year>=2026) return res.status(StatusCodes.BAD_REQUEST).send('Nacimiento fuera de los rangos permitidos');
    if (!id_curso || id_curso < 1 && id_curso > 4) return res.status(StatusCodes.BAD_REQUEST).send('No existe ese curso');
    try {
        await client.connect()
        const sqlQuery = 'INSERT INTO alumnos (nombre, apellido, id_curso, fecha_nacimiento, hace_deportes) VALUES ($1, $2, $3, $4, $5)  ';
        const values = [nombre, apellido, id_curso, fecha_nacimiento, hace_deportes];
        const resultadoPg = await client.query(sqlQuery, values);
       
        res.status(StatusCodes.CREATED).json(resultadoPg.rows[0]); // el 200
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error: 500`);
    } finally {
        await client.end();
    }
})
app.put('/api/alumnos/', async (req, res) => {
    
    const { id, nombre, apellido, id_curso, fecha_nacimiento, hace_deportes } = req.body;
    if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).send('El ID debe ser numérico'); //este es el 404
    }
    const client = new Client(config);

    try{
        await client.connect();
        const sqlQuery = "UPDATE alumnos SET nombre = $2, apellido = $3, id_curso = $4, fecha_nacimiento = $5, hace_deportes = $6 WHERE id = $1"
;
        const values = [id, nombre, apellido, id_curso, fecha_nacimiento, hace_deportes];
        const resultadoPg = await client.query(sqlQuery, values);
        res.status(StatusCodes.OK).json(resultadoPg.rows);
    }catch(error){
        console.log(error);
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }finally{
        await client.end();
    }

})
app.delete('/api/alumnos/:id', async (req, res) => {
 const id = req.params.id;
    if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).send('El ID debe ser numérico'); //este es el 404
    }
    const client = new Client(config);

    try{
        await client.connect();
        const sqlQuery = "DELETE FROM Alumnos WHERE id = $1";
        const values = [id];
        const resultadoPg = await client.query(sqlQuery, values);
        if (resultadoPg.rowCount === 0) {
            return res.status(StatusCodes.NOT_FOUND).send(`No se encontró un alumno con id ${id}`); //el 400
        }
        res.status(StatusCodes.OK).json(resultadoPg.rows[0]); // el 200
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Error: 500`);
    } finally {
        await client.end();
    }

})

// Inicio el Server y lo pongo a escuchar.
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});