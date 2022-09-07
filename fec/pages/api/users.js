import postgres from "postgres";
const { DB_CONNECTION_URL, PORT, NODE_ENV } = process.env;

const sql = postgres(DB_CONNECTION_URL);
console.log(sql)
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
