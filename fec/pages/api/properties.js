import postgres from "postgres";
const sql = postgres(`postgres://localhost:5432/samchav`);

// const sql = postgres(process.env.DB_CONNECTION_URL);
// >>>>>>> 395b9844dcf980d67d89b9cdfe8cd093bc657f79

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
