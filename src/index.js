import './index.css';
import showItems from './modules/showItems.js';

const baseURL = 'https://api.tvmaze.com/shows/';
const showAllItem = document.querySelector('.show-all-item');
const involvementURL = '';

showItems(showAllItem, baseURL, involvementURL);