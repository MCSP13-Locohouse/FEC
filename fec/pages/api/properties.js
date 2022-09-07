import postgres from "postgres";
const { DB_CONNECTION_URL, PORT, NODE_ENV } = process.env;

const sql = postgres(DB_CONNECTION_URL);
console.log(sql)

export default async function propertiesHandler(req, res) {
  if (req.method === "GET") {
    try {
      const properties = await sql`
      SELECT * FROM properties`;
      res.status(200).json({ properties });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
