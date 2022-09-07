import postgres from "postgres";

const { DATABASE_URL, PORT, NODE_ENV } = process.env;
<<<<<<< HEAD
const sql = postgres(process.env.DB_CONNECTION_URL);
=======

const sql = postgres(DATABASE_URL);
>>>>>>> 07f70a37669061756b5fd1128409af6e2a9c4845

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
