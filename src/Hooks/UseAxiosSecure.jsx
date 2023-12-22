import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { userlogOut } = UseAuth();
  axiosInstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      console.log("found an error while request");
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("found an error in response", status);
      if (status === 401 || status === 403) {
        await userlogOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default UseAxiosSecure;
