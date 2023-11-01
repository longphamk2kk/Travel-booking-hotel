import "./list.scss";
import Sidebar from "../../../components/adminPage/sidebar/Sidebar";
import Navbar from "../../../components/adminPage/navbar/Navbar";
import RoomDatatable from "../../../components/adminPage/datatable/RoomDatatable";
import NewRoomModal from "../../../components/modals/NewRoomModal";

const RoomList = () => {
  return (
    <div className="listAdmin">
      <Sidebar />
      <NewRoomModal />
      <div className="listContainer">
        <Navbar />
        <RoomDatatable />
      </div>
    </div>
  );
};

export default RoomList;
