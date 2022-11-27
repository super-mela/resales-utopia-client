import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useJwtToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      axios
        .get(`https://resales-utopia-server.vercel.app/jwt?email=${email}`)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("accessToken", res.data.token);
            setToken(res.data.token);
          } else {
            toast.error("Token access failed");
          }
        });
    }
  }, [email]);

  return [token];
};

export default useJwtToken;
