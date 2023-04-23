import React from 'react';

export function useFetch(url) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState([]);

  const request = React.useCallback((params) => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        if (params) {
          const newData = data.filter((item) => item.id <= params._limit ? item : false);

          setData(newData);
          setIsLoading(false);
        } else {
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        console.error('error: ', error);
      });
  }, [url]);

  React.useEffect(() => {
    request();
  }, [request]);

  const refetch = ({ params }) => {
    request(params);
  };

  return {
    isLoading,
    error,
    data,
    refetch
  }
}