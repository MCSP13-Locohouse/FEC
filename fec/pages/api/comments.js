import postgres from "postgres";

const sql = postgres(
  process.env.DB_CONNECTION_URL,
  process.env.NODE_ENV === "production"
    ? {
        ssl: { rejectUnauthorized: false },
        max_lifetime: 60 * 30,
      }
    : {}
);

export default async function commentsHandler(req, res) {
  if (req.method === "GET") {
    try {
      const comments = await sql`
      SELECT first_name, last_name, stars, comment FROM comments`;
      res.status(200).json({ comments });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
