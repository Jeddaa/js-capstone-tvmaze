/* eslint-disable import/no-unresolved */
// import getComments from './getComments.js';
import requestItems from './request.js';

async function getAllComments(resId, baseURL) {
  const popup = document.querySelector('.popup-div');
  console.log('res id:', resId);
  console.log('base url:', baseURL);
  // const btn = document.querySelector(`.${res.id}`);
  // const body = document.querySelector('body');
  popup.style.display = 'block';
  const finalHtml = document.createElement('div');
  // popup.appendChild(finalHtml);
  // const bg = document.createElement('div');
  // bg.className = 'test-popup';
  // body.appendChild(bg);
  await requestItems(`${baseURL}${resId}`).then((res) => {
    const eachHtml = `
       <div class ="list">
       <i id="close-popup" class="fa fa-times" aria-hidden="true"></i>
        <p>${res.language}</p>
        </br>
        <p>${res.rating.average}</p>
        </br>
        <p>${res.status}</p>
        </br>
      </div>
      `;
    finalHtml.insertAdjacentHTML('beforeEnd', eachHtml);
  });
  popup.appendChild(finalHtml);

  const btn2 = document.querySelector('#close-popup');
  btn2.addEventListener('click', () => {
    popup.style.display = 'none';
    // body.removeChild(bg);
  });
}

export default getAllComments;
