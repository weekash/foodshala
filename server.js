const db = require("./db");
const express = require("express");
const app = express();
const PORT = 8000 || process.env.PORT;
db.connect((err) => {
  if (err) throw err;
  else console.log("Mysql connected");
});
app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log("successfully connected");
});

app.use(express.json({ extended: true })); //allow us to use req.body
app.use("/api/user", require("./routes/api/user"));
app.use("/api/restaurant", require("./routes/api/restaurant"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/orders", require("./routes/api/orders"));
