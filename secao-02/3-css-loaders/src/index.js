import './index.css';
// import _ from 'lodash';

function buttonClicked() {
  const el = document.querySelector('#header');
  el.innerHTML = 'Hey i have updated the code!';
  const listItem = ['apple', 'orange', 'banana'];
  const ul = document.querySelector('#shopping-list');
  _.forEach(listItem, function (item) {
    const tempEl = document.createElement('li');
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
}

document.querySelector('#button-1').addEventListener('click', buttonClicked);
