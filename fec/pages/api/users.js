import postgres from "postgres";

const { DATABASE_URL, PORT, NODE_ENV } = process.env;
// const sql = postgres(`postgres://localhost:5432/samchav`);
const sql = postgres(process.env.DATABASE_URL);

postgres("postgres://user:password@host:port/database");

export default async function usersHandler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await sql`
      SELECT * FROM customers`;
      res.status(200).json({ users });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
