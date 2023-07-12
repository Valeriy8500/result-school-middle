import React from "react";
import axios from "axios";

export function useListElements(url, pageNumber) {
  const [loading, setLoading] = React.useState(false);
  const [elements, setElements] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(false);

  React.useEffect(() => {
    setElements([]);
  }, [url]);

  React.useEffect(() => {
    if (url !== undefined) {
      setLoading(true);

      axios({
        method: "GET",
        url: url,
        params: { page: pageNumber }
      }).then((res) => {
        setElements((prev) => {
          return [...new Set([...prev, ...res.data.results])];
        });
        setHasMore(res.data.info.next);
        setLoading(false);
      }).catch((err) => {
        setLoading(false);
        console.error(err);
      });
    }
  }, [pageNumber, url]);

  return {
    loading,
    elements,
    hasMore
  }
}
