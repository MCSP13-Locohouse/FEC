import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
const { DATABASE_URL, PORT, NODE_ENV } = process.env;
const sql = postgres(DATABASE_URL);

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
