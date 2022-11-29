import { useEffect, useState } from "react";
import { instance } from "../../utils/AxiosInstance";

const useUserType = (email) => {
  const [userType, setUserType] = useState(null);
  const [userTypeLoading, setUserTypeLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (email) {
      instance
        .get(`/users?email=${email}`, { signal: signal })
        .then((res) => {
          const userType = res.data.userType;

          setUserType(userType);
          setUserTypeLoading(false);
        })
        .catch((err) => console.error(err));

      return () => {
        controller.abort();
      };
    }
  }, [email]);

  return [userType, userTypeLoading];
};

export default useUserType;
