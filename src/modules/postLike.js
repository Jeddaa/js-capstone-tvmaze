/* eslint-disable import/named */
import { requestItems, involvementApi } from './request.js';

export const showLike = async (showLikes, involvementURL) => {
  const like = await requestItems(involvementURL);
  showLikes.forEach((showlike) => {
    const index = showlike.getAttribute('data-set');
    showlike.innerHTML = `${like[index - 1].likes}`;
  });
};

export const postLike = (thumbsUp, involvementURL, showLikes) => {
  thumbsUp.forEach((clickLike) => {
    clickLike.addEventListener('click', async () => {
      const getId = clickLike.getAttribute('data-set');
      await involvementApi(involvementURL, { item_id: getId.toString() });
      showLike(showLikes, involvementURL);
    });
  });
};