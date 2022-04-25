require("../config/connectDB");
const UserModel = require("../models/users");
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fname, lname, email, password } = req.body;
    console.log(fname, lname, email, password);
    new UserModel({ firstName: fname, lastName: lname, email, password })
      .save()
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        res.status(404).json({ err: err.message });
      });
  }
  //   res.status(200).json({ name: "John Doe" });
  if (req.method === "GET") {
    const data = await UserModel.find();
    res.status(200).json({ data });
  }
}
