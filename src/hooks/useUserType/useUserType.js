import { useEffect, useState } from "react";
import { instance } from "../../utils/AxiosInstance";

const useUserType = (email, user) => {
  const [userType, setUserType] = useState(null);
  const [userTypeLoading, setUserTypeLoading] = useState(true);

  useEffect(() => {
    if (email && localStorage.getItem("accessToken")) {
      instance
        .get(`users?email=${email}`)
        .then((res) => {
          const userType = res.data.userType;

          setUserType(userType);
          setUserTypeLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);

  return [userType, userTypeLoading];
};

export default useUserType;
