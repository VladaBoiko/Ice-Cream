(() => {
  const refs = {
    openHeaderModalBtnTwo: document.querySelector(
      '.js-header-modal-open-mobile'
    ),
    closeHeaderModalBtnTwo: document.querySelector(
      '.js-header-modal-close-mobile'
    ),
    modalHeader: document.querySelector('.js-header-modal-mobile'),
    body: document.querySelector('body'),
  };

  refs.openHeaderModalBtnTwo.addEventListener('click', toggleHeaderModal);
  refs.closeHeaderModalBtn.addEventListener('click', toggleHeaderModal);

  function toggleHeaderModal() {
    refs.modalHeader.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
})();
