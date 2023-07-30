import { UserContext } from "./userContext";

export const UserProvider = ({ children }) => {
  const user = {
    rol: "administrador",
  };
  return (
    // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
    <UserContext.Provider value={{ user: user }}>
      {children}
    </UserContext.Provider>
  );
};
