import commentCount from './commentCount.js';
import { requestItems, involvementApi } from './request.js';

const content = document.querySelector('.popup-content');
const showComments = document.querySelector('.popup-comments');
const form = document.querySelector('.add-comment-form');
const popup = document.querySelector('.popup-div');
const close = document.querySelector('.close-popup');
const commentHeader = document.querySelector('.comment-header');
const cmtURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'WXD5VCEItQhvz4b5mgk3';

const refreshComments = async (appId, resId, cmtURL) => {
  await requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    commentHeader.innerHTML = '';
    commentCount(response, commentHeader);
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
};

const addComments = async (cmtURL, appId, resId) => {
  const name = document.querySelector('.yourName');
  const comt = document.querySelector('.yourComment');
  if (name.value !== '' && comt.value !== '') {
    await involvementApi(`${cmtURL}apps/${appId}/comments`, {
      item_id: resId,
      username: name.value,
      comment: comt.value,
    });
    await refreshComments(appId, resId, cmtURL);
  }
};
const fetchComments = (appId, resId, cmtURL) => {
  requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    commentHeader.innerHTML = '';
    commentCount(response, commentHeader);
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
};

const fetchAPIData = async (resId, baseURL) => {
  await requestItems(`${baseURL}${resId}`).then((res) => {
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
};

const addPopUp = (btn, baseURL) => {
  btn.forEach((testbtn) => {
    testbtn.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      const resId = testbtn.getAttribute('data-set');
      popup.style.display = 'block';
      fetchAPIData(resId, baseURL);
      fetchComments(appId, resId, cmtURL);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await addComments(cmtURL, appId, resId);
        form.reset();
      });
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
