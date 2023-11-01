import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { hotelColumns, hotels } from "../../../hoteldata";
import { Link } from "react-router-dom";
import { useState } from "react";

const HotelDatatable = () => {
  const [data, setData] = useState(hotels);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin/rooms/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">Hotels</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={hotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default HotelDatatable;
