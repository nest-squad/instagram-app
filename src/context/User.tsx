import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type UserI = {
  username?: string | null,
}
type UserContext = {
  user?: UserI | null,
  setUser?: Dispatch<SetStateAction<UserI | null>>
}
const User = createContext<UserContext>({});

export function UserProvider(props: any) {
  const [user, setUser] = useState<UserI | null>(null);
  return (
    <User.Provider value={{
      user,
      setUser
    }}>{props.children}</User.Provider>
  );
}

export const useUser = () => useContext(User)