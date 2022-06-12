const refs = {
  list: document.querySelector('.js-list'),
};

refs.list.addEventListener('click', () => {
  const name = event.target;

  if (name.nodeName !== 'BUTTON') {
    return;
  }

  const element = document.querySelector(`#${name.dataset.id}`);
  element.classList.add('is-open');

  element.addEventListener('click', () => {
    const name = event.target;

    if (name.nodeName !== 'BUTTON') {
      return;
    }

    element.classList.remove('is-open');
  });
});
