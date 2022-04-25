// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//connect DB
require("./config/connectDB");

export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ name: "John Doe" });
  }
  res.status(200).json({ name: "John Doe" });
}
