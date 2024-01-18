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
const changePasswordRouter = require("./Api/App/changePasswordRouter");
const deleteUserRouter = require("./Api/App/deleteUserRouter");
const getUsersRouter = require("./Api/Web/AdminWeb/getUserRouter");
const resetPasswordRouter = require("./Api/App/resetPasswordRouter");
const bookingCreateRouter = require("./Api/App/bookingCreate");
const createPaymentRouter = require("./Api/App/createPaymentRouter");
const confirmPaymentRouter = require("./Api/App/confirmPaymentRouter");
const cancelBookingRouter = require("./Api/App/cancelBookingRouter");
const bookingHistoryRouter = require("./Api/App/bookingHistoryRouter");
const paymentHistoryRouter = require("./Api/App/paymentHistoryRouter");
const bookingDetailsRouter = require("./Api/App/bookingDetailsRouter");
const paymentDetailsRouter = require("./Api/App/paymentDetailsRouter");
const paymentStatusRouter = require("./Api/App/paymentStatusRouter");
// const convertCurrencyRouter = require('./Api/App/convertCurrencyRouter');
// const exchangeRateRouter = require('./Api/App/exchangeRateRouter');

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

app.use("/change-password", changePasswordRouter);

app.use("/deleteuser", deleteUserRouter);

app.use("/getusers", getUsersRouter);

app.use("/user", resetPasswordRouter);

app.use("/createBooking", bookingCreateRouter);

app.use("/createPayment", createPaymentRouter);

app.use("/confirmPayment", confirmPaymentRouter);

app.use("/cancelBooking", cancelBookingRouter);

app.use("/bookingHistory", bookingHistoryRouter);

app.use("/paymentHistory", paymentHistoryRouter);

app.use("/bookingDetails", bookingDetailsRouter);

app.use("/paymentDetails", paymentDetailsRouter);

app.use("/paymentStatus", paymentStatusRouter);

// app.use("/convertCurrency", convertCurrencyRouter);

// app.use("/exchangeRate", exchangeRateRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
