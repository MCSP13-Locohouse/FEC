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
      const { prop_id, first_name, last_name, guest_num, startdate, enddate } =
        req.body;
      const reservationMaker = await sql`
  INSERT INTO reservations (prop_id, first_name, last_name, guest_num, startdate, enddate) VALUES (${prop_id}, ${first_name}, ${last_name}, ${guest_num}, ${startdate}, ${enddate}) RETURNING *`;
      res.status(200).json({ reservationMaker });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Messed up on our end" });
    }
  } else {
    res.status(400).json({ msg: "You messed up" });
  }
}
