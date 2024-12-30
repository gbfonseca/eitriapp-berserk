import { createContext, useContext, useState } from "react";

type UserContextPropTypes = {
  user: { name: string; email: string };
  login: () => void;
};

const UserContext = createContext({} as UserContextPropTypes);

export default function UserProvider({ children }) {
  const [user, setUser] = useState({} as UserContextPropTypes["user"]);

  const login = async () => {
    console.log("delay");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("done");
    setUser({ name: "John Doe", email: "" });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserContext);

  return context;
}
