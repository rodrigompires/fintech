import React from 'react';

export const useGetState = () => {
  const [states, setStates] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://brasilapi.com.br/api/ibge/uf/v1`);
        const json = await response.json();
        setStates(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { states };
};



