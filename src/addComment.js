export default () => {
  const allComments = [];
  localStorage.setItem('allComments', JSON.stringify(allComments));
};
