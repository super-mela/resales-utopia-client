import axios from "axios";
import { useEffect, useState } from "react";

const useUserType = (email) => {
  const [userType, setUserType] = useState(null);
  const [userTypeLoading, setUserTypeLoading] = useState(true);
  const accessToken = localStorage.getItem("accessToken");

  console.log("email", email);
  useEffect(() => {
    console.log("Trigger");
    // setUserType(null);
    if (email && accessToken) {
      axios
        .get(`https://resales-utopia-server.vercel.app/users?email=${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          console.log("🚀 ~ file: useUserType.js:13 ~ .then ~ res", res);

          const userType = res.data.userType;

          setUserType(userType);
          setUserTypeLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [email, accessToken]);

  console.log("Type from hook:", userType);
  return [userType, userTypeLoading];
};

export default useUserType;
