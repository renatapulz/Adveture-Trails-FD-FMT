import { createContext } from "react";
import { useEffect, useState } from "react";

export const TrilhasContext = createContext()

export const TrilhasContextProvider = ({children}) => {
   let [data, setData] = useState(null);
   const [loading, setLoading] = useState (true);
   const [error, setError] = useState(null);
 
   useEffect (() => {
     fetch ('http://localhost:3000/trilhas')
     .then(response => {
       if (response.ok) {
       return response.json()
     }
     throw response;
   })
   .then(data => {
     console.log('Dados recebidos da API:', data);
     setData(data.trilhas);
   })
   .catch(error => {
     console.log("Erro na Api.", error);
     setError(error);
   })
   .finally(() => {
     setLoading(false);
   })
 }, [])

 return (
   <TrilhasContext.Provider value={{data, setData, loading, setLoading, error, setError}}>
   {children}
 </TrilhasContext.Provider>
 )
}