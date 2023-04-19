import requestItems from './request.js';
// import addPopUp from './addPopUp.js';
import addPopUp from './testPopUp.js';

const showItems = async (showAllItem, baseURL) => {
  showAllItem.innerHTML = '';

  for (let index = 1; index < 12; index += 1) {
    /* eslint-disable no-await-in-loop */
    await requestItems(`${baseURL}${index}`).then((res) => {
      showAllItem.innerHTML += `
    <section class="col-sm-4">
          <aside>
            <img
              src="${res.image.medium}"
              alt="list of movies image">
            <div class="d-flex justify-between">
              <div class="fw-700">${res.name}</div>
              <div class="text-right">
                <i class="fa-solid fa-thumbs-up"></i>
                <div class="fs-5 fw-700">5 likes</div>
              </div>
            </div>
          </aside>
          <aside class="text-center">
            <button class="btn" data-set=${res.id} >Comments</button>
            <button class="btn2">Reservations</button>
          </aside>
        </section>
    `;
    });
  }
  const btn = document.querySelectorAll('.btn');
  addPopUp(btn, baseURL);
};

export default showItems;
