import { useEffect, useState } from "react";

const useGet = (endpoint) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const token = import.meta.env.REACT_APP_TOKEN;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.REACT_APP_URL_BACKEND}${endpoint}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );
        const json = await response.json();
        if (json.statusCode === 401) throw new Error(json.error);
        setData(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [endpoint, token]);

  return [data, error, setData];
};

export default useGet;
