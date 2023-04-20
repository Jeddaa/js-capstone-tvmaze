const requestItems = async (baseURL) => {
  const response = await fetch(baseURL);
  const tvData = await response.json();
  return tvData;
};

const involvementApi = async (baseURL, data) => {
  const response = await fetch(baseURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ item_id: data }) });
  const likes = await response.json();
  return likes;
};

module.exports = { requestItems, involvementApi };