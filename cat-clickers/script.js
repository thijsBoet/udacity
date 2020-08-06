const catImageOne = document.querySelector('.cat-image-1');
const catImageTwo = document.querySelector('.cat-image-2');

const catNameOne = document.querySelector(".cat-name-1");
const catNameTwo = document.querySelector(".cat-name-2");

const counter = document.querySelector(".counter");
let count = 0;

catNameOne.innerText = 'Mr Pickles';
catNameTwo.innerText = 'Gizmo';

const addClick = () => {
  count += 1;
  counter.innerText = `Counter: ${count}`;
};

catImageOne.addEventListener("click", addClick);
catImageTwo.addEventListener("click", addClick);