/* eslint-disable no-console */
export default () => {
  const btn = document.querySelector('.test-btn');
  btn.addEventListener('click', async () => {
    try {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ abc234: '' }),
      });
      const newData = await response.json();
      console.log('newdata:', newData);
      // console.log('newdata:', response);
    } catch (e) {
      console.error('Error getting new app', e);
    }
  });
};
