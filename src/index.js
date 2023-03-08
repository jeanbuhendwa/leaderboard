import './style.css';
import { addScore, getData } from './modules/addScore.js';
import renderList from './modules/renderList.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');
const scoreInput = document.getElementById('score-input');

const upload = async (e) => {
  e.preventDefault();
  await addScore(userInput.value, scoreInput.value);
  userInput.value = '';
  scoreInput.value = '';

  const display = await getData();
  renderList(display.result);
};

submitBtn.addEventListener('click', upload);

const refresh = async () => {
  const get = await getData();
  renderList(get.result);
};

refreshBtn.addEventListener('click', () => refresh);

window.onload = refresh;
