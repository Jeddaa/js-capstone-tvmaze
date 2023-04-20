/* eslint-disable no-await-in-loop */
import { requestItems, involvementApi } from './request.js';

const showItems = async (showAllItem, baseURL, involvementURL) => {
  showAllItem.innerHTML = '';

  for (let index = 1; index < 20; index += 1) {
    try {
      const res = await requestItems(`${baseURL}${index}`);
      const like = await involvementApi(involvementURL);
      showAllItem.innerHTML += `
        <section class="col-sm-4">
          <aside>
            <img
              src="${res.image.medium}"
              alt="list of movies image">
            <div class="d-flex justify-between">
              <div class="fw-700 w-65">${res.name}</div>
              <div class="text-right w-35">
                <i class="fa-solid fa-thumbs-up"></i>
                <div class="fs-5 fw-700">${like.likes} likes</div>
              </div>
            </div>
          </aside>
          <aside class="text-center">
            <button class="btn">Comments</button>
            <button class="btn">Reservations</button>
          </aside>
        </section>
    `;
    } catch (error) {
      showAllItem.innerHTML += error;
    }
  }
};

export default showItems;
