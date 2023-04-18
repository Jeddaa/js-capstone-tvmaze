const requestItems = async (baseURL) => {
  const response = await fetch(baseURL);
  const tvData = await response.json();
  return tvData;
};

export default requestItems;