import { useEffect, useState } from "react";

export const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/trilhas")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Erro na resposta da API");
      })
      .then((data) => {
        console.log("Dados recebidos da API:", data);
        setData(data.trilhas);
      })
      .catch((error) => {
        console.error("Erro na API:", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};