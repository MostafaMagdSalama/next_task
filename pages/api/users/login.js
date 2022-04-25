require("../config/connectDB");
const UserModel = require("../models/users");
const jwt = require("jsonwebtoken");
export default async function handler(req, res) {
  if (req.method == "POST") {
    const { email, password } = req.body;
    const isEmailExist = await UserModel.findOne({ email });
    if (!isEmailExist) {
      return res.status(404).json({ err: "email or password not correct" });
    }
    const isValidPassword = isEmailExist.password == password;
    console.log(password);
    if (isValidPassword) {
      const token = jwt.sign({ userId: isEmailExist._id }, "omniah");
      return res.status(200).json({
        token,
        name: isEmailExist.firstName + " " + isEmailExist.lastName,
        email: isEmailExist.email,
      });
    }
    return res.status(404).json({ err: "email or password not correct" });
  }
}
