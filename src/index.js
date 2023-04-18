import './index.css';
import showItems from './modules/showItems';

const baseURL = 'https://api.tvmaze.com/shows/';
const showAllItem = document.querySelector('.show-all-item');

showItems(showAllItem, baseURL);