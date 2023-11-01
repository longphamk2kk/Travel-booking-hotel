import "./list.scss";
import Sidebar from "../../../components/adminPage/sidebar/Sidebar";
import Navbar from "../../../components/adminPage/navbar/Navbar";
import HotelDatatable from "../../../components/adminPage/datatable/HotelDatatable";
import NewRoomModal from "../../../components/modals/NewRoomModal";

const HotelList = () => {
  return (
    <div className="listAdmin">
      <Sidebar />
      <NewRoomModal />
      <div className="listContainer">
        <Navbar />
        <HotelDatatable />
      </div>
    </div>
  );
};

export default HotelList;
