import axios from "axios";

const instance = axios.create({
  baseURL: "https://3e75-2a09-bac1-7ac0-50-00-247-f.ngrok-free.app/api/",
  timeout: 5000,
});

export default instance;
