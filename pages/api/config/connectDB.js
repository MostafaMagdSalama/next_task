const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/blog-clone", () =>
//   console.log("DB connected")
// );
mongoose.connect(
  "mongodb+srv://mostafa:mostafa@cluster0.ndnvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  () => console.log("DB connected")
);
