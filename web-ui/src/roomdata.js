export const roomColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "bed", headerName: "Bed", width: 100 },
  { field: "size", headerName: "Size", width: 200 },
  { field: "refundable", headerName: "Refundable", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  { field: "room_infras", headerName: "Room infrastructure", width: 200 },
];

export const rooms = [
  {
    id: "202",
    bed: "1 queen bed",
    size: 419,
    refundable: "refundable",
    status: "Available",
    room_infras: ["AC", "shower", "Double bed", "towel", "bathtub", "TV"],
  },
];
