import './index.css';
import showItems from './modules/showItems.js';

const baseURL = 'https://api.tvmaze.com/shows/';
// const cmtURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const showAllItem = document.querySelector('.show-all-item');
// const appId = 'UCdL9KYsi0SBeKyTsp1q';
const involvementURL = '';

showItems(showAllItem, baseURL, involvementURL);
