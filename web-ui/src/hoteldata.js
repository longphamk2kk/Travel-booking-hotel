import StarBorderOutlined from "@material-ui/icons/StarBorderOutlined";

export const hotelColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "hotel",
    headerName: "Hotel",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 70,
    renderCell: (params) => (
      <div>
        {params.row.rating}
        <StarBorderOutlined style={{ color: "yellow" }} />
      </div>
    ),
  },
  { field: "price", headerName: "Price", width: 100 },
  { field: "description", headerName: "Aescription", width: 200 },
  { field: "amenities", headerName: "Amenities", width: 200 },
  {
    field: "checkOut",
    headerName: "Check-Out",
    width: 80,
  },
  {
    field: "checkIn",
    headerName: "Check-in",
    width: 80,
  },
];

//temporary data
export const hotels = [
  {
    id: 1,
    name: "Hotel A",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/378828506.jpg?k=ea7d10effc56e6e3ded34794423b9a97f43d25c303867e6051d422a08b023480&o=&hp=1",
    rating: 8.5,
    price: "1.500.000",
    description: "This is a description of Hotel A.",
    amenities: ["Free WiFi", "Swimming pool", "Fitness center"],
    checkIn: "14:00",
    checkOut: "12:00",
  },
  {
    id: 2,
    name: "Hotel B",
    image:
      "https://cdn.discordapp.com/attachments/1008571099497377792/1125494653358178395/soroush2842_very_modern_house_on_the_edge_of_a_cliff_sunset_and_6dadbe3a-3042-4c5f-b547-1112c0a484eb.png",
    rating: 9.2,
    price: "2.000.000",
    description: "This is a description of Hotel B.",
    amenities: ["Free WiFi", "Restaurant", "Spa"],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: 3,
    name: "Hotel B",
    image:
      "https://cdn.discordapp.com/attachments/1008571099497377792/1125494653358178395/soroush2842_very_modern_house_on_the_edge_of_a_cliff_sunset_and_6dadbe3a-3042-4c5f-b547-1112c0a484eb.png",
    rating: 9.2,
    price: "2.000.000",
    description: "This is a description of Hotel B.",
    amenities: ["Free WiFi", "Restaurant", "Spa"],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: 4,
    name: "Hotel B",
    image:
      "https://cdn.discordapp.com/attachments/1008571099497377792/1125494653358178395/soroush2842_very_modern_house_on_the_edge_of_a_cliff_sunset_and_6dadbe3a-3042-4c5f-b547-1112c0a484eb.png",
    rating: 9.2,
    price: "2.000.000",
    description: "This is a description of Hotel B.",
    amenities: ["Free WiFi", "Restaurant", "Spa"],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: 5,
    name: "Hotel B",
    image:
      "https://cdn.discordapp.com/attachments/1008571099497377792/1125494653358178395/soroush2842_very_modern_house_on_the_edge_of_a_cliff_sunset_and_6dadbe3a-3042-4c5f-b547-1112c0a484eb.png",
    rating: 9.2,
    price: "2.000.000",
    description: "This is a description of Hotel B.",
    amenities: ["Free WiFi", "Restaurant", "Spa"],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: 6,
    name: "Hotel B",
    image:
      "https://cdn.discordapp.com/attachments/1008571099497377792/1125494653358178395/soroush2842_very_modern_house_on_the_edge_of_a_cliff_sunset_and_6dadbe3a-3042-4c5f-b547-1112c0a484eb.png",
    rating: 9.2,
    price: "2.000.000",
    description: "This is a description of Hotel B.",
    amenities: ["Free WiFi", "Restaurant", "Spa"],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: 7,
    name: "Hotel B",
    image:
      "https://cdn.discordapp.com/attachments/1008571099497377792/1125494653358178395/soroush2842_very_modern_house_on_the_edge_of_a_cliff_sunset_and_6dadbe3a-3042-4c5f-b547-1112c0a484eb.png",
    rating: 9.2,
    price: "2.000.000",
    description: "This is a description of Hotel B.",
    amenities: ["Free WiFi", "Restaurant", "Spa"],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  {
    id: 8,
    name: "Hotel B",
    image:
      "https://cdn.discordapp.com/attachments/1008571099497377792/1125494653358178395/soroush2842_very_modern_house_on_the_edge_of_a_cliff_sunset_and_6dadbe3a-3042-4c5f-b547-1112c0a484eb.png",
    rating: 9.2,
    price: "2.000.000",
    description: "This is a description of Hotel B.",
    amenities: ["Free WiFi", "Restaurant", "Spa"],
    checkIn: "15:00",
    checkOut: "11:00",
  },
  // Các khách sạn khác...
];



export default hotels;
