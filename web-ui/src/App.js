import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/home/Home";
import List from "./pages/landingPage/list/List";
import Hotel from "./pages/landingPage/hotel/Hotel";
import Register from "./components/landingPage/register/Register";
import Login from "./components/landingPage/register/Login";

import AdminHome from "./pages/admin/home/Home";
import AdminList from "./pages/admin/list/List";
import HotelList from "./pages/admin/list/HotelList";
import RoomList from "./pages/admin/list/RoomList";
import Single from "./pages/admin/single/Single";
import New from "./pages/admin/new/New";
import { productInputs, userInputs } from "./formSource";
// import "./style/dark.scss";
import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";

function App() {
  // const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/">
          <Route index element={<AdminHome />} />
          <Route path="bookings">
            <Route index element={<AdminList />} />
            <Route path=":bookingId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New Booking" />}
            />
          </Route>
          <Route path="hotels">
            <Route index element={<HotelList />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add" />}
            />
          </Route>
          <Route path="rooms">
            <Route index element={<RoomList />} />
            <Route path=":roomId" element={<Single />} />
            <Route
              path="new"
              element={
                <New
                  inputs={productInputs}
                  title="Provide the information about your room"
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
