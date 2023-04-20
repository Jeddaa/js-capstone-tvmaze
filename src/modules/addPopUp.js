/* eslint-disable consistent-return */
import requestItems from './request.js';

const content = document.querySelector('.popup-content');
const showComments = document.querySelector('.popup-comments');
const formBtn = document.querySelector('.comment-btn');
const popup = document.querySelector('.popup-div');
const close = document.querySelector('.close-popup');
const commentHeader = document.querySelector('.comment-header');
const cmtURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const appId = 'UCdL9KYsi0SBeKyTsp1q';
const appId = '7xp0YiVh0xhLSIwUJh90';

function refreshComments(appId, resId, cmtURL) {
  requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    commentHeader.innerHTML = '';
    const counta = response.length;
    if (typeof counta === 'undefined') {
      commentHeader.innerHTML = 'Comments (0)';
    } else if (typeof counta === 'number' && Number.isInteger(counta)) {
      commentHeader.innerHTML = `Comments (${counta})`;
    }
    showComments.innerHTML = '';
    response.forEach((res) => {
      showComments.innerHTML += `
    <ul class="api-comments-div">
        <li>${res.creation_date}</li>
        <li>${res.username}:</li>
        <li>${res.comment}</li>
      </ul>
    `;
    });
  });
}

async function addComments(cmtURL, appId, resId) {
  const name = document.querySelector('.yourName');
  const comt = document.querySelector('.yourComment');
  if (name.value !== '' && comt.value !== '') {
    console.log(comt.value);
    await fetch(`${cmtURL}apps/${appId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: resId,
        username: name.value,
        comment: comt.value,
      }),
    }).then(() => {
      refreshComments(appId, resId, cmtURL);
      // console.log(response);
      name.value = '';
      comt.value = '';
    });
  }
}
function fetchComments(appId, resId, cmtURL) {
  requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    commentHeader.innerHTML = '';
    const counta = response.length;
    if (typeof counta === 'undefined') {
      commentHeader.innerHTML = 'Comments (0)';
    } else if (typeof counta === 'number' && Number.isInteger(counta)) {
      commentHeader.innerHTML = `Comments (${counta})`;
    }
    // requestItems(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7xp0YiVh0xhLSIwUJh90/comments?item_id=${resId}`).then((response) => {
    response.forEach((res) => {
      showComments.innerHTML += `
    <ul class="api-comments-div">
        <li>${res.creation_date}</li>
        <li>${res.username}:</li>
        <li>${res.comment}</li>
      </ul>
    `;
    });
  });
}

function fetchAPIData(resId, baseURL) {
  requestItems(`${baseURL}${resId}`).then((res) => {
    content.innerHTML = `
    <div class="api-data-img">
      <img
      src="${res.image.medium}"
      alt="list of movies image">
      </div>
      <h2 class="api-data-h2">${res.name}</h2>
       <ul class ="api-data">
        <li>Language: ${res.language}</li>
        <li>Rating Average: ${res.rating.average}</li>
        <li>Runtime: ${res.runtime}</li>
        <li>Premiered: ${res.premiered}</li>
        <li>Ended: ${res.ended}</li>
        <li>Status: ${res.status}</li>
      </ul>
      <div class="api-data-summary">
      <h3> Summary </h3>
      ${res.summary}
      </div>
      `;
  });
}
// class="api-data-summary-header"
// <p class="api-data-summary"> Summary: ${res.summary}</p>;

const addPopUp = (btn, baseURL) => {
  btn.forEach((testbtn) => {
    testbtn.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      const resId = testbtn.getAttribute('data-set');
      popup.style.display = 'block';
      fetchAPIData(resId, baseURL);
      fetchComments(appId, resId, cmtURL);
      formBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        addComments(cmtURL, appId, resId);
        // refreshComments(appId, resId, cmtURL);
      });
      // fetchComments(appId, resId, cmtURL);
      refreshComments(appId, resId, cmtURL);
      // console.log(appId);
    });
  });
};

close.addEventListener('click', () => {
  popup.style.display = 'none';
  showComments.innerHTML = '';
  document.body.style.overflow = '';
  commentHeader.innerHTML = '';
});
export default addPopUp;
