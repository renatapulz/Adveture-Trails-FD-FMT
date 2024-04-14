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

    const sendToApi = async (formData) => {
      try {
        const response = await fetch("http://localhost:3000/cadastro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error("Erro ao enviar dados para a API");
        }
        window.location.reload();
        console.log("Dados enviados com sucesso para a API.");
      } catch (error) {
        console.error("Erro ao enviar dados para a API:", error);
      }
    };


  return { data, loading, error, sendToApi };
};