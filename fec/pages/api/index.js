import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();
const { DB_CONNECTION_URL, PORT, NODE_ENV } = process.env;
const sql = postgres(
  process.env.DB_CONNECTION_URL,
  process.env.NODE_ENV === "production"
    ? {
        ssl: { rejectUnauthorized: false },
        max_lifetime: 60 * 30,
      }
    : {}
);

export default async function initialHandler(req, res) {
  if (req.method === "GET") {
    try {
      const comments = await sql`
      SELECT * FROM comments`;
      const properties = await sql`
      SELECT * FROM properties`;
      const reservations = await sql`
      SELECT * FROM reservations`;
      const users = await sql`
      SELECT * FROM customers`;
      res.status(200).json({ comments, properties, reservations, users });
    } catch (err) {
      console.error("Bad news in index api: ", err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
