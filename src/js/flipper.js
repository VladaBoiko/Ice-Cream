const list = document.querySelector('.products__list');
let cards = null;
let card = null;

list.addEventListener('click', event => {
  const clickFlip = event.target.closest('.card');
  if (!clickFlip) {
    flipEnd();
    classRemove();
    return;
  } else if (event.target.closest('.js-flip')) {
    flipEnd();
    clickFlip.classList.remove('js-flip');
    classRemove();
    return;
  }

  const activElement = document.querySelector('.js-flip');

  if (activElement) {
    flipEnd();
    classRemove();
  }

  cards = clickFlip;
  card = clickFlip.children;

  clickFlip.classList.add('js-flip');
  card[0].style.transform = 'rotateY(180deg)';
  card[1].style.transform = 'rotateY(360deg)';

  function classRemove() {
    cards.classList.remove('js-flip');
  }
});

function flipEnd() {
  card[0].style.transform = 'rotateY(0deg)';
  card[1].style.transform = 'rotateY(180deg)';
  card[0].classList.remove('js-flip');
}
