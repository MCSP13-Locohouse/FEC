import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
// console.log(process.env);
const { DATABASE_URL, PORT, NODE_ENV } = process.env;
const sql = postgres(process.env.DB_CONNECTION_URL);

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
  } else if (req.method === "POST") {
    try {
      const reservationMaker = await sql`
  "INSERT INTO reservations (prop_id, first_name, last_name, guest_num, startdate, enddate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [prop_id, first_name, last_name, guest_num, startdate, enddate]`;
      reservationsHandler.status(200).json({ reservationMaker });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
