import postgres from "postgres";
import dotenv from "dotenv"; //Probramatically get env variables from .env file
import express, { response } from "express";
import next from 'next';

//GET ENVIRONMENT VARIABLES
dotenv.config();
const { DATABASE_URL, PORT, NODE_ENV } = process.env;
const dev = process.env.NODE_ENV !== 'production'


const app = next({ dev });
const handle = app.getRequestHandler();



//PSQL CONNECTION SETTINGS
// const pool = new pg.Pool({
//     connectionString: DATABASE_URL,
//     ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
// });
//const PORT = process.env.PORT || 5050;


app.prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Express Server listening on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })




// //MIDDLEWARE
// app.use(express.static('static'));
// app.use(express.json());


