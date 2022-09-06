import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
const { DATABASE_URL, PORT, NODE_ENV } = process.env;

const sql = postgres(DATABASE_URL);


export default async function commentsHandler(req, res) {
  if (req.method === "GET") {
    try {
      const comments = await sql`
      SELECT * FROM comments`;
      res.status(200).json({ comments });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
