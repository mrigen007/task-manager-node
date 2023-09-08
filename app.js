const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const tasks = require("./routes/task");
require("dotenv").config();
// app.get("/", (req, res, next) => {
//   res.send("Hello");
// });
app.use(express.json());
app.use("/api/v1/task", tasks);

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}....`);
    });
  } catch (e) {
    console.log(e);
  }
};

startDB();
