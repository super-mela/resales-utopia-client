import axios from "axios";
import { useEffect, useState } from "react";

const useUserType = (email) => {
  const [userType, setUserType] = useState(null);
  const [userTypeLoading, setUserTypeLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (email && localStorage.getItem("accessToken")) {
      console.log(localStorage.getItem("accessToken"));
      axios
        .get(`https://resales-utopia-server.vercel.app/users?email=${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          const userType = res.data.userType;
          setUserType(userType);
          setUserTypeLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [email, token]);

  return [userType, userTypeLoading];
};

export default useUserType;
