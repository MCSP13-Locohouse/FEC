import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL);
// const sql = postgres(process.env.DATABASE_URL);

postgres("postgres://user:password@host:port/database");

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
