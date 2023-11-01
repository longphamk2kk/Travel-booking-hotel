import "./list.scss"
import Sidebar from "../../../components/adminPage/sidebar/Sidebar";
import Navbar from "../../../components/adminPage/navbar/Navbar";
import Datatable from "../../../components/adminPage/datatable/Datatable";
import NewRoomModal from "../../../components/modals/NewRoomModal";

const AdminList = () => {
  return (
      <div className="listAdmin">
          <Sidebar />
          <NewRoomModal/>
          <div className="listContainer">
              <Navbar />
              <Datatable />
          </div>
      </div>
  );
}

export default AdminList;
