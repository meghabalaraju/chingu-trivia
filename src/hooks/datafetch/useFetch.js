import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState(null);
  const [error, seterror] = useState(null);

  useEffect(() => {
    setLoading(true);
    const { method, headers } = options;
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method: method, headers: headers });
        const json = await response.json();
        setdata(json);
        setLoading(false);
      } catch (err) {
        console.error(err);
        seterror(err);
      }
    };
    fetchData();
  }, []);

  return {
    loading,
    data,
    error,
  };
};

export default useFetch;
