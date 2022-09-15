async function getLatLong(req, res) {
  let locData;
  if (req.method === "GET") {
    // Fetch Lat/Long for given address
    let address = req._parsedUrl.query;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`,
      {
        mode: "cors",
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((locData) => {
        res.status(200).json(locData.results[0]["geometry"]["location"]);
      });
  } else {
    res.status(400).json({ msg: "Invalid address" });
  }
}
