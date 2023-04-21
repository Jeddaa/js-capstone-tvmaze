/**
 * @jest-environment jsdom
 */

const commentCount = require('../modules/commentCount.js');

describe('testing all cases for comment counter', () => {
  test('expect count to return a 0', () => {
    const getCount = [];
    const showCount = document.createElement('li');
    commentCount(getCount, showCount);
    expect(showCount.innerHTML).toBe('Comments (0)');
  });

  test('expect count to return 3', () => {
    const getCount = [
      { comment: 'A good watch', creation_date: '2023-04-20', username: 'jedda' }, { comment: 'not my style', creation_date: '2023-04-20', username: 'jack' }, { comment: 'nothing much just cheeling ', creation_date: '2023-04-21', username: 'wsd' },
    ];
    const showCount = document.createElement('li');
    commentCount(getCount, showCount);
    expect(showCount.innerHTML).toBe('Comments (3)');
  });
});