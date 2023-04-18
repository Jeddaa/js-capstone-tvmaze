import getComments from './getComments.js';

/* eslint-disable no-console */
export default (allComments) => {
  const popup = document.querySelector('.popup-div');
  const btn = document.querySelector('.test-btn');
  const body = document.querySelector('body');
  btn.addEventListener('click', async () => {
    // getComments();
    let finalHtml = '';
    const bg = document.createElement('div');
    bg.className = 'test-popup';
    body.appendChild(bg);
    popup.style.display = 'block';
    if (localStorage.getItem('allComments')) {
      allComments.push(...JSON.parse(localStorage.getItem('allComments')));
    }
    allComments.forEach((element) => {
      const eachHtml = `
       <div class ="list">
        <p>${element.name} by ${element.comment}</p>
      </div>
      `;
      finalHtml += eachHtml;
    });

    const moreHtml = `
    <i id="close-popup" class="fa fa-times" aria-hidden="true"></i>
    <form action="">
      <input type="text" name="name" class="yourName" placeholder="Your name" />
      <input type="text" name= "name" class="yourComment" placeholder="Your insights">
    </form>
     <div class="comment-div">
      <button class="comment-btn">Comment</button>
    </div>
    `;
    finalHtml += moreHtml;
    popup.innerHTML = finalHtml;

    const addComt = document.querySelector('.comment-btn');
    addComt.addEventListener('click', () => {
      getComments(allComments);
    });
    const btn2 = document.querySelector('#close-popup');
    btn2.addEventListener('click', () => {
      popup.style.display = 'none';
      body.removeChild(bg);
    });
  });
};
