import { useEffect, useState } from "react";

const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const data = fetch(endpoint);
    data
      .then((answer) => answer.json())
      .then((answer) => setData(answer))
      .catch((error) => console.log(error));
  }, [endpoint]);

  return [data];
};

export default useFetch;
