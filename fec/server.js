import postgres from "postgres";
import pg from "pg";
import dotenv from "dotenv"; //Probramatically get env variables from .env file
import express from "express";
import next from 'next';
import cors from 'cors';

//GET ENVIRONMENT VARIABLES
dotenv.config();
const { DATABASE_URL, PORT, NODE_ENV } = process.env;
const dev = process.env.NODE_ENV !== 'production'

const app = express();
// const app = next({ dev });
const pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  });
  
//   app.use(express.static("static"));
  app.use(express.json());
  app.use(cors());

//Get Routes

  app.get("/properties", (req, res) => {
    pool.query("SELECT * FROM properties").then((data) => {
      res.send(data.rows);
    });
  });
  
  app.get("/customers", (req, res) => {
    pool.query("SELECT * FROM customers").then((data) => {
      res.send(data.rows);
    });
  });

  app.get("/reservations", (req, res) => {
    pool.query("SELECT * FROM reservations").then((data) => {
      res.send(data.rows);
    });
  });

  app.get("/comments", (req, res) => {
    pool.query("SELECT * FROM comments").then((data) => {
      res.send(data.rows);
    });
  });

  //Post Routes
  
  app.post("/reservations", (req, res) => {
    const { res_date } = req.body;
    if (quote.length !== 0) {
      pool
        .query(
          "INSERT INTO reservations (res_date) VALUES ($1) RETURNING *",
          [res_date]
        )
        .then((addedRes) => {
          res.send(addedRes.rows[0]);
        });
    } else {
      res.sendStatus(418);
    }
  });

  app.post("/comments", (req, res) => {
    const { stars, comment} = req.body;
    if (quote.length !== 0) {
      pool
        .query(
          "INSERT INTO comments (stars, comment) VALUES ($1, $2) RETURNING *",
          [stars, comment]
        )
        .then((addedCom) => {
          res.send(addedCom.rows[0]);
        });
    } else {
      res.sendStatus(418);
    }
  });
  
  //Delete Route

  app.delete("/reservations/:id", (req, res) => {
    const id = req.params.id;
    pool
      .query("DELETE FROM reservations WHERE id = $1 RETURNING *;", [id])
      .then((data) => {
        if (data.rows.length === 0) {
          res.sendStatus(404);
        } else {
          res.status(200);
          res.send(data.rows[0]);
        }
      });
  });

  app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
  });

// const handle = app.getRequestHandler();



//PSQL CONNECTION SETTINGS
// const pool = new pg.Pool({
//     connectionString: DATABASE_URL,
//     ssl: NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
// });
//const PORT = process.env.PORT || 5050;


// app.prepare()
//     .then(() => {
//         const server = express()

//         server.get('*', (req, res) => {
//             return handle(req, res)
//         })

//         server.listen(3000, (err) => {
//             if (err) throw err
//             console.log('> Express Server listening on http://localhost:3000')
//         })
//     })
//     .catch((ex) => {
//         console.error(ex.stack)
//         process.exit(1)
//     })




// //MIDDLEWARE
// app.use(express.static('static'));
// app.use(express.json());


