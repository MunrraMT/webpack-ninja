import style from './clearButton.css';

const el = document.createElement('button');
el.innerHTML = 'clear';
el.classList.add([style.button]);
el.onclick = () => alert('clear clicked');
document.body.appendChild(el);
