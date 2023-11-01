import "./new.scss";
import Sidebar from "../../../components/adminPage/sidebar/Sidebar";
import Navbar from "../../../components/adminPage/navbar/Navbar";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Perks from "../../../components/adminPage/Perks";
import PhotosUploader from "../../../components/adminPage/PhotosUploader";
import axios from "../../../api/axios";

const New = ({ inputs, title }) => {

  const [photos, setPhotos] = useState([]);
  const {id} = useParams();
  const [roomTitle,setRoomTitle] = useState('');
  const [address,setAddress] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
  const [price,setPrice] = useState(100);
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/places/'+id).then(response => {
      const {data} = response;
      setRoomTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  function inputHeader(text) {
    return (
        <h2 className="text-2xl mt-[20px] mb-[10px]">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
        <p className="text-gray-500 text-sm mb-4">{text}</p>
    );
  }
  function preInput(header,description) {
    return (
        <>
          {inputHeader(header)}
          {inputDescription(description)}
        </>
    );
  }

  function uploadPhoto(ev) {
    const files = ev.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name)
      data.append(files[i].name, files[i]);
      const url = URL.createObjectURL(files[i]);
      setAddedPhotos(current => [...current, url]);
    }

    axios.post('Room', data, {
      headers: {'Content-type':'multipart/form-data'}
    }).then(response => {
      const {data:filenames} = response;
    })
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      roomTitle, address, addedPhotos,
      description, perks, extraInfo,
      checkIn, checkOut, maxGuests, price,
    };
    if (id) {
      // update
      await axios.put('Room', {
        id, ...placeData
      });
      setRedirect(true);
    } else {
      // console.log(data.get('photos'))
      // axios.post('Image/Upload', data, {
      //   headers: {'Content-type':'multipart/form-data'}
      // }).then(response => {});
      // setRedirect(true);
    }
  }

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex-[6]">
        <Navbar />
        <div className="py-20 pl-20 pr-40">
          <form className="" onSubmit={savePlace}>
            <div className="flex justify-between">
              <h1 className="font-medium  text-2xl  items-center ">{title}</h1>
              <img className="w-[200px]" src="//img.agoda.net/images/header/ec-basics@2x.png" alt="basics page"></img>
            </div>

            {preInput('Title', 'Name of your place. should be short and catchy as in advertisement')}
            <div className="border-[#dddfe2] border-2 p-4">
              <input type="text" value={roomTitle} onChange={ev => setRoomTitle(ev.target.value)} placeholder="title, for example: My lovely apt" style={{ width: '100%' }}/>
            </div>

            {preInput('Address', 'Address to this place')}
             <div className="border-[#dddfe2] border-2 p-4">
              <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address" style={{ width: '100%' }}/>
            </div>
            <div>

              {preInput('Photos','More = better')}
              <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
                  <input type="file" multiple className="hidden" onChange={uploadPhoto} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                  Upload
                </label>
                {addedPhotos.length > 0 && addedPhotos.map(link=>(
                    <div key={link}>
                      <img className="h-full" src={link} alt="image"/>
                    </div>
                ))}
              </div>
            </div>
            {preInput('Description','Description of the place')}
            <div >
              <textarea className="w-full border-zinc-300 border-2 h-[100px]" value={description} onChange={ev => setDescription(ev.target.value)}
                        placeholder='Example:
                        • 5-minute walk to/from public transportation
                        • Family-friendly
                        • Big open space, with amazing views and natural light' />
            </div>

            {preInput('Perks','Select all the perks of your place')}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <Perks selected={perks} onChange={setPerks} />
            </div>

            {preInput('Extra info','House rules, etc')}
            <textarea className="w-full border-zinc-300 border-2 h-[100px]" value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
           
            {preInput('Check in&out times','Add check in and out times, remember to have some time window for cleaning the room between guests')}
            <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <div className="input-wrapper2">
                <input type="text"
                       value={checkIn}
                       onChange={ev => setCheckIn(ev.target.value)}
                       placeholder="14"/>
                       </div>
              </div>

              <div >
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <div className="input-wrapper2">
                <input type="text"
                       value={checkOut}
                       onChange={ev => setCheckOut(ev.target.value)}
                       placeholder="11" />
                     </div>
              </div>

              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <div className="input-with-controls">
                <div className="input-wrapper">
                  <button className="control-button" onClick={() => setMaxGuests(maxGuests - 1)}>-</button>
                  <input type="number" value={maxGuests}onChange={ev => setMaxGuests(ev.target.value)}/>   
                  <button className="control-button" onClick={() => setMaxGuests(maxGuests + 1)}>+</button>
                  </div>
                </div>

              </div>

              <div>
                <h3 className="mt-2 -mb-1">Price per night</h3>
                <div className="input-with-controls">
                <div className="input-wrapper">
                  <button className="control-button" onClick={() => setPrice(price - 1)}>-</button>
                  <input type="number" value={price} onChange={ev => setPrice(ev.target.value)} />
                  <button className="control-button" onClick={() => setPrice(price + 1)}>+</button>
                  </div>
                </div>
              </div>

            </div>
            <button className="primary my-4"  style={{ backgroundColor: 'green',color: 'white',
              fontSize: '16px',padding: '12px 24px',borderRadius: '8px',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              border: 'none',cursor: 'pointer',}} >Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
