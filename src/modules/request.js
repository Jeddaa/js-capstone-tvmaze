const requestItems = async (baseURL) => {
  const response = await fetch(baseURL);
  const tvData = await response.json();
  return tvData;
};

const involvementApi = async (baseURL) => {
  const response = await fetch(baseURL);
  const likes = await response.json();
  return likes;
};

module.exports = { requestItems, involvementApi };