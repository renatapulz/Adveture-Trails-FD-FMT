import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const useApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}/trilhas`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Erro na resposta da API");
      })
      .then((data) => {
        console.log("Dados recebidos da API:", data);
        setData(data);
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
      const response = await fetch(`${import.meta.env.VITE_API_HOST}/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados para a API");
      }
      navigate('/lista-trilhas');
      console.log("Dados enviados com sucesso para a API.");
    }
    catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
    }
  };

  return { data, loading, error, sendToApi };
};
