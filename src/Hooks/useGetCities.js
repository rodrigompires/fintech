import React from 'react';

export const useGetCities = ({ uf }) => {
  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`);
        const json = await response.json();
        setCities(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [uf]);

  return { cities };
};