import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useJwtToken = (email) => {
  console.log("useToken Called", email);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://resales-utopia-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.token) {
            localStorage.setItem("accessToken", data.token);
            setToken(data.token);
          } else {
            toast.error("token failed");
          }
        });
    }
  }, [email]);

  return [token];
};

export default useJwtToken;
