// import _ from 'lodash';

import style from './index.css';
import './clearButton';
import logo from './assets/icon.png';

console.log(style);

function buttonClicked() {
  const el = document.querySelector('#header');
  el.innerHTML = 'Hey i have updated the code!';
  const listItem = ['apple', 'orange', 'banana'];
  const ul = document.querySelector('#shopping-list');

  listItem.forEach((item) => {
    const tempEl = document.createElement('li');
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });

  // _.forEach(listItem, function (item) {
  //   const tempEl = document.createElement('li');
  //   tempEl.innerHTML = item;
  //   ul.appendChild(tempEl);
  // });
}

const btn1 = document.querySelector('#button-1');
btn1.addEventListener('click', buttonClicked);
// btn1.classList.add([style.button]);
btn1.classList.add(['button']);

const logoEl = document.querySelector('#logo');
logoEl.src = logo;
logoEl.width = 100;
logoEl.height = 100;
