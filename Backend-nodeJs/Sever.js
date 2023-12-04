const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const registerRouter = require("./Api/App/registerRouter");
const loginRouter = require("./Api/App/loginRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  "mongodb+srv://longphamk2kk:longpham1808@bookinghotel.shiqdl4.mongodb.net/booking_hotel_system?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/register", registerRouter);

app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
