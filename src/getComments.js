// import renderComments from './renderComments.js';

export default (allComments) => {
  const name = document.querySelector('.yourName');
  const comt = document.querySelector('.yourComment');
  if (name.value !== '' && comt.value !== '') {
    allComments.push({
      name: name.value,
      comment: comt.value,
    });
    name.value = '';
    comt.value = '';
  }
  localStorage.setItem('allComments', JSON.stringify(allComments));
  // renderComments();
};
