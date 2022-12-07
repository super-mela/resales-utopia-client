import { useEffect, useState } from "react";
import { instance } from "../../utils/AxiosInstance";

const useUserType = (email) => {
  const [userType, setUserType] = useState(null);
  const [userTypeLoading, setUserTypeLoading] = useState(true);

  useEffect(() => {
    console.log("Trigger");
    if (email) {
      instance
        .get(`/users?email=${email}`)
        .then((res) => {
          console.log("🚀 ~ file: useUserType.js:13 ~ .then ~ res", res);

          const userType = res.data.userType;

          setUserType(userType);
          setUserTypeLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [email]);

  console.log("Type from hook:", userType);
  return [userType, userTypeLoading];
};

export default useUserType;
