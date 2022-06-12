(() => {
  const refs = {
    openCowModalBtn: document.querySelector('.js-cow-modal-open'),
    closeCowModalBtn: document.querySelector('.js-cow-modal-close'),
    modalCow: document.querySelector('.js-cow-modal'),
    body: document.querySelector('body'),
  };

    refs.openCowModalBtn.addEventListener('click', toggleCowModal);
    refs.closeCowModalBtn.addEventListener('click', toggleCowModal);

  function toggleCowModal() {
    refs.modalCow.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
})();