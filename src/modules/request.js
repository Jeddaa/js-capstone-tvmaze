const requestItems = async (baseURL) => {
  const response = await fetch(baseURL);
  const tvData = await response.json();
  return tvData;
};

const involvementApi = async (baseURL, data) => {
  await fetch(baseURL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
};

module.exports = { requestItems, involvementApi };
