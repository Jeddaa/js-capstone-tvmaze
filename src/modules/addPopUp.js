// import requestItems from './request.js';

// const addPopUp = (btn, baseURL) => {
//   const popup = document.querySelector('.popup-div');
//   // const body = document.querySelector('body');
//   // popup.style.display = 'block';
//   // const finalHtml = document.createElement('div');
//   // popup.appendChild(finalHtml);
//   // const bg = document.createElement('div');
//   // bg.className = 'test-popup';
//   // body.appendChild(bg);
//   // console.log(btn);
//   btn.forEach((testbtn) => {
//     popup.innerHTML = '';
//     testbtn.addEventListener('click', () => {
//       const resId = testbtn.getAttribute('data-set');
//       // console.log(popup);
//       popup.classList.toggle('d-none');
//       requestItems(`${baseURL}${resId}`).then((res) => {
//         // console.log(res);
//         popup.innerHTML += `
//        <div class ="list">
//        <i id="close-popup" class="fa fa-times close-popup" aria-hidden="true"></i>
//         <p>${res.language}</p>
//         <p>${res.rating.average}</p>
//         <p>${res.status}</p>
//       </div>
//       `;

//         // finalHtml.insertAdjacentHTML('beforeEnd', eachHtml);
//         // finalHtml += eachHtml;
//         // finalHtml.append(eachHtml);
//         const btn2 = document.querySelector('.close-popup');
//         close(btn2);
//       });
//       // const btn2 = document.querySelector('.close-popup');
//       // close(btn2);
//       // btn2.addEventListener('click', () => {
//       // });
//     });
//   });
// };

// const close = (btn2) => {
//   // console.log(btn2);
//   // btn2.addparentElement.classList.toggle('d-none');

//   // console.log(btn2.parentNode);

//   btn2.addEventListener('click', () => {
//     // console.log('click');
//     btn2.parentNode.parentNode.classList.toggle('d-none');
//     console.log(btn2.parentNode.parentNode);
//   });
// };
// export default addPopUp;

import requestItems from './request.js';

const addPopUp = (btn, baseURL) => {
  const popup = document.querySelector('.popup-div');
  // const body = document.querySelector('body');
  // popup.style.display = 'block';
  // const finalHtml = document.createElement('div');
  // popup.appendChild(finalHtml);
  // const bg = document.createElement('div');
  // bg.className = 'test-popup';
  // body.appendChild(bg);
  // console.log(btn);
  btn.forEach((testbtn) => {
    popup.innerHTML = '';
    testbtn.addEventListener('click', () => {
      const popup = document.querySelector('.popup-div');
      // let finalHtml;
      popup.style.display = 'block';
      const resId = testbtn.getAttribute('data-set');
      const finalHtml = document.createElement('div');

      // console.log(popup);
      // popup.classList.toggle('d-none');
      requestItems(`${baseURL}${resId}`).then((res) => {
        // console.log(res);
        // popup.innerHTML += `
        // const eachHtml = `
        finalHtml.innerHTML = `
       <div class ="list">
        <p>${res.language}</p>
        <p>${res.rating.average}</p>
        <p>${res.status}</p>
      </div>
      `;
        popup.appendChild(finalHtml);
        popup.style.display = 'block';

        // const finalHtml = document.createElement('div');

        // finalHtml += eachHtml;
        // popup.innerHTML = finalHtml;

        // finalHtml.insertAdjacentHTML('beforeEnd', eachHtml);
        // finalHtml += eachHtml;
        // finalHtml.append(eachHtml);
        const btn2 = document.querySelector('.close-popup');
        // close(btn2);
        btn2.addEventListener('click', (e) => {
          e.preventDefault();
          // console.log('click');
          popup.remove(finalHtml);
          // popup.style.display = 'none';

          // btn2.parentNode.parentNode.classList.toggle('d-none');
          console.log(btn2.parentNode.parentNode);
        });
      });

      // const btn2 = document.querySelector('.close-popup');
      // close(btn2);
      // btn2.addEventListener('click', () => {
      // });
    });
  });
};

const close = (btn2) => {
  // console.log(btn2);
  // btn2.addparentElement.classList.toggle('d-none');

  // console.log(btn2.parentNode);

  btn2.addEventListener('click', () => {
    // console.log('click');
    popup.style.display = 'none';

    // btn2.parentNode.parentNode.classList.toggle('d-none');
    console.log(btn2.parentNode.parentNode);
  });
};
export default addPopUp;
