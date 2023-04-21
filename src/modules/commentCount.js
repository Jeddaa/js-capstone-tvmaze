const commentCount = (response, renderHtml) => {
  const counta = response.length;
  if (typeof counta === 'undefined') {
    renderHtml.innerHTML = 'Comments (0)';
  } else if (typeof counta === 'number' && Number.isInteger(counta)) {
    renderHtml.innerHTML = `Comments (${counta})`;
  }
};

module.exports = commentCount;
