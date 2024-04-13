import { createContext } from "react";
import { useApi } from "./useApi";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({children}) => {
  const { data, setData, loading, setLoading, error, setError } = useApi();


 return (
   <TrilhasContext.Provider value={{data, setData, loading, setLoading, error, setError}}>
   {children}
 </TrilhasContext.Provider>
 )
}