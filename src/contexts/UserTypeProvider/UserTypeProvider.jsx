import { createContext, useContext } from "react";
import useUserType from "../../hooks/useUserType/useUserType";
import { AuthContext } from "../AuthProvider/AuthProvider";

export const UserTypeContext = createContext();

const UserTypeProvider = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const [userType] = useUserType(user?.email);
  const usersType = {
    userType,
  };
  console.log(
    "🚀 ~ file: UserTypeProvider.jsx:11 ~ UserTypeProvider ~ userType",
    usersType
  );

  return (
    <UserTypeContext.Provider value={usersType}>
      {children}
    </UserTypeContext.Provider>
  );
};

export default UserTypeProvider;
