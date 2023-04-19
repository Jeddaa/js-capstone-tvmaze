/* eslint-disable consistent-return */
const getComments = async (cmtURL, appId, itemId) => {
  const name = document.querySelector('.yourName');
  const comt = document.querySelector('.yourComment');
  if (name.value !== '' && comt.value !== '') {
    const response = await fetch(`${cmtURL}${appId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${itemId}`,
        username: name.value,
        comment: comt.value,
      }),
    });
    const comments = await response.json();
    name.value = '';
    comt.value = '';
    console.log(comments);
    return comments;
  }
};

export default getComments;
