import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
// console.log(process.env);
const { DATABASE_URL, PORT, NODE_ENV } = process.env;

// const sql = postgres(`postgres://localhost:5432/samchav`);
const sql = postgres(process.env.DATABASE_URL);

postgres("postgres://user:password@host:port/database");

export default async function reservationsHandler(req, res) {
  if (req.method === "GET") {
    try {
      const reservations = await sql`
      SELECT * FROM customers`;
      res.status(200).json({ reservations });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
