import { involvementApi } from './request.js';

const postLike = (thumbsUp, involvementURL) => {
  thumbsUp.forEach((clickLike) => {
    clickLike.addEventListener('click', async () => {
      const getId = clickLike.getAttribute('data-set');
      await involvementApi(involvementURL, { item_id: getId.toString() });
    });
  });
};

export default postLike;
