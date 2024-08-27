import { useEffect, useState } from "react";

export default function useFetch({
  url,
  onSuccess,
}: {
  url: string;
  onSuccess?: (data?: unknown) => void;
}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((resData) => {
          setData(resData);
          onSuccess?.(resData);
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error, setData };
}