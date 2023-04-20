// достаю 1 страву

import { useState, useEffect } from 'react';

function PreviewCategorie() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
        );
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);

  return (
    <div>
      <h1>My Component</h1>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default PreviewCategorie;
