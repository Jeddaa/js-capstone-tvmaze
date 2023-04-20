import { requestItems } from './request.js';
import addPopUp from './addPopUp.js';
import postLike from './postLike.js';

const showItems = async (showAllItem, baseURL, involvementURL) => {
  showAllItem.innerHTML = '';

  try {
    for (let index = 1; index < 13; index += 1) {
      /* eslint-disable no-await-in-loop */
      const res = await requestItems(`${baseURL}${index}`);
      const like = await requestItems(involvementURL);
      showAllItem.innerHTML += `
        <section class="col-sm-4">
          <aside>
            <img
              src="${res.image.medium}"
              alt="list of movies image">
            <div class="d-flex justify-between">
              <div class="fw-700 w-65">${res.name}</div>
              <div class="text-right w-35">
                <i class="fa-solid fa-thumbs-up like" data-set=${res.id}></i>
                <div class="fs-5 fw-700">${like[index - 1].likes}</div>
              </div>
            </div>
          </aside>
          <aside class="text-center">
            <button class="btn comment" data-set=${res.id} >Comments</button>
            <button class="btn2">Reservations</button>
          </aside>
        </section>
    `;
    }
  } catch (error) {
    showAllItem.innerHTML += error;
  }
  const thumbsUp = document.querySelectorAll('.like');
  postLike(thumbsUp, involvementURL);
  const btn = document.querySelectorAll('.btn');
  addPopUp(btn, baseURL);
};

export default showItems;
