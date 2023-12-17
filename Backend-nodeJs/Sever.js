const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const registerUserRouter = require("./Api/App/registerRouter");
const loginUserRouter = require("./Api/App/loginRouter");
const hotelAddRouter = require("./Api/Web/AdminWeb/hotelAddRouter");
const registerAdminRouter = require("./Api/Web/AdminWeb/registerRouter");
const loginAdminRouter = require("./Api/Web/AdminWeb/loginRouter");
const getHotelRouter = require("./Api/App/getHotelsRouter");
const updateHotelRouter = require("./Api/Web/AdminWeb/updateHotelROuter");
const logoutUserRouter = require("./Api/App/logoutRouter");
const logoutAdminRouter = require("./Api/Web/AdminWeb/logoutRouter");
const addUserRouter = require("./Api/App/addUserRouter");
const deleteHotelRouter = require("./Api/Web/AdminWeb/deleteHotelRouter");

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

app.use("/registeruser", registerUserRouter);

app.use("/loginuser", loginUserRouter);

app.use("/hotel", hotelAddRouter);

app.use("/registeradmin", registerAdminRouter);

app.use("/loginadmin", loginAdminRouter);

app.use("/updatehotel", updateHotelRouter);

app.use("/gethotel", getHotelRouter);

app.use("/logoutuser", logoutUserRouter);

app.use("/logoutadmin", logoutAdminRouter);

app.use("/deleteHotel", deleteHotelRouter);

app.use("/user", addUserRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
