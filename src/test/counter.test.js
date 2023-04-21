/**
 * @jest-environment jsdom
 */

const counter = require('../modules/counter.js');

describe('testing all cases for counter', () => {
  test('expect count to return a 0', () => {
    const getArr = [];
    const showCount = document.createElement('li');
    counter(getArr, showCount);
    expect(showCount.innerHTML).toBe('0');
  });

  test('expect count to return 3', () => {
    const getArr = [
      { item_id: '1', likes: 8 }, { item_id: '2', likes: 9 }, { item_id: '3', likes: 8 },
    ];
    const showCount = document.createElement('li');
    counter(getArr, showCount);
    expect(showCount.innerHTML).toBe('3');
  });
});