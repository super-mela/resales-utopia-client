import axios from "axios";
import toast from "react-hot-toast";

export const getJwtToken = (email) => {
  if (email) {
    axios
      .get(`https://resales-utopia-server.vercel.app/jwt?email=${email}`)
      .then((res) => {
        console.log(res);
        if (res.data.token) {
          const token = res.data.token;
          localStorage.setItem("accessToken", token);
        } else {
          toast.error("Token access failed");
        }
      })
      .catch((err) => toast.error(err.message));
  }
};
