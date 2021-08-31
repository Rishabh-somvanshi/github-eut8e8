import { createContext, useContext } from 'react';
/* 
-Context provides a way to pass data through the component tree without having to pass props down manually at every level. 
-use for global data*/
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
