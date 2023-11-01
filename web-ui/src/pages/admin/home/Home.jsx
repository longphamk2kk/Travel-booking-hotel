import Sidebar from "../../../components/adminPage/sidebar/Sidebar";
import Navbar from "../../../components/adminPage/navbar/Navbar";
import "./home.scss";
import Widget from "../../../components/adminPage/widget/Widget";
import Featured from "../../../components/adminPage/featured/Featured";
import Chart from "../../../components/adminPage/chart/Chart";
import Table from "../../../components/adminPage/table/Table";
import NewRoomModal from "../../../components/modals/NewRoomModal";
import Modal from "../../../components/modals/Modal";


const AdminHome = () => {
  return (
    <div className="homeAdmin">

      <Sidebar/>
      <div className="homeAdmin__container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
