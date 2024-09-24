import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = state;

  const getFetch = async () => {
    if (!url) return;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
