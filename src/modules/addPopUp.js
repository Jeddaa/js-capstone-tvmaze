/* eslint-disable no-unused-vars */
import commentCount from './commentCount.js';
import { requestItems, involvementApi } from './request.js';

const content = document.querySelector('.popup-content');
const showComments = document.querySelector('.popup-comments');
const form = document.querySelector('.add-comment-form');
const popup = document.querySelector('.popup-div');
const close = document.querySelector('.close-popup');
const commentHeader = document.querySelector('.comment-header');
const cmtURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const appId = 'WXD5VCEItQhvz4b5mgk3';
const appId = 'UCdL9KYsi0SBeKyTsp1q';

const refreshComments = async (appId, resId, cmtURL) => {
  showComments.innerHTML = '';
  // eslint-disable-next-line consistent-return
  await requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    commentHeader.innerHTML = '';
    commentCount(response, commentHeader);
    try {
      response.forEach((res) => {
        // console.log(resId);
        showComments.innerHTML += `
    <ul class="api-comments-div">
        <li>${res.creation_date}</li>
        <li>${res.username}:</li>
        <li>${res.comment}</li>
      </ul>
    `;
      });
    } catch (err) {
      return null;
    }
  });
};

const fetchComments = async (appId, resId, cmtURL) => {
  showComments.innerHTML = '';
  // eslint-disable-next-line consistent-return
  await requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    commentHeader.innerHTML = '';
    commentCount(response, commentHeader);
    try {
      response.forEach((res) => {
        showComments.innerHTML += `
    <ul class="api-comments-div">
        <li>${res.creation_date}</li>
        <li>${res.username}:</li>
        <li>${res.comment}</li>
      </ul>
    `;
      });
    } catch (err) {
      return null;
    }
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
    await fetchComments(appId, resId, cmtURL);
  }
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
    testbtn.addEventListener('click', async () => {
      document.body.style.overflow = 'hidden';
      const resId = testbtn.getAttribute('data-set');
      popup.style.display = 'block';
      await fetchAPIData(resId, baseURL);
      await fetchComments(appId, resId, cmtURL);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await addComments(cmtURL, appId, resId);
        form.reset();
      });
      close.addEventListener('click', () => {
        popup.style.display = 'none';
        showComments.innerHTML = '';
        document.body.style.overflow = '';
        commentHeader.innerHTML = '';
        setTimeout(() => {
          document.location.reload();
        }, 10);
      });
    });
  });
};

export default addPopUp;
