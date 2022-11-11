import { createContext } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userCoffeBreak", {});

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
}
