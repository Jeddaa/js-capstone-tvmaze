/* eslint-disable consistent-return */
import requestItems from './request.js';
// import addComments from './addComments.js';

const content = document.querySelector('.popup-content');
const showComments = document.querySelector('.popup-comments');
const formBtn = document.querySelector('.comment-btn');
const popup = document.querySelector('.popup-div');
const close = document.querySelector('.close-popup');
const cmtURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const appId = 'UCdL9KYsi0SBeKyTsp1q';
const appId = '7xp0YiVh0xhLSIwUJh90';

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
    }).then((response) => {
      refreshComments(appId, resId, cmtURL);
      console.log(response);
      name.value = '';
      comt.value = '';
    });
    // const comments = await response.json();
    // name.value = '';
    // comt.value = '';
    // console.log(comments);
    // return comments;
  }
}
function fetchComments(appId, resId, cmtURL) {
  // let final = '';
  requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    // requestItems(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7xp0YiVh0xhLSIwUJh90/comments?item_id=${resId}`).then((response) => {
    // showComments.remove();
    response.forEach((res) => {
      showComments.innerHTML += `
    <div class ="list">
        <p>${res.comment}</p>
        <p>${res.username}</p>
      </div>
    `;
      // final += eachh;
    });
    // showComments.innerHTML = final;
  });
}

function refreshComments(appId, resId, cmtURL) {
  // let final = '';
  requestItems(`${cmtURL}apps/${appId}/comments?item_id=${resId}`).then((response) => {
    // requestItems(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7xp0YiVh0xhLSIwUJh90/comments?item_id=${resId}`).then((response) => {
    showComments.innerHTML = '';
    response.forEach((res) => {
      showComments.innerHTML += `
    <div class ="list">
        <p>${res.comment}</p>
        <p>${res.username}</p>
      </div>
    `;
      // final += eachh;
    });
    // showComments.innerHTML = final;
  });
}

function fetchAPIData(resId, baseURL) {
  requestItems(`${baseURL}${resId}`).then((res) => {
    content.innerHTML = `
       <div class ="list">
        <p>${res.name}</p>
        <p>${res.language}</p>
        <p>${res.rating.average}</p>
        <p>${res.status}</p>
      </div>
      `;
  });
}

const addPopUp = (btn, baseURL) => {
  btn.forEach((testbtn) => {
    testbtn.addEventListener('click', () => {
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
      console.log(appId);
    });
  });
};

close.addEventListener('click', () => {
  popup.style.display = 'none';
  showComments.innerHTML = '';
});
export default addPopUp;
