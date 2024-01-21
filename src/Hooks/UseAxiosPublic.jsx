import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://automotive-server-side-peach.vercel.app/",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
