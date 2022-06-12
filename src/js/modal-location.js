(() => {
  const refs = {
        openHeaderModalBtn: document.querySelector('.js-header-modal-open'),
    closeHeaderModalBtn: document.querySelector('.js-header-modal-close'),
    modalHeader: document.querySelector('.js-header-modal'),
  };

    refs.openHeaderModalBtn.addEventListener('click', toggleHeaderModal);
    refs.closeHeaderModalBtn.addEventListener('click', toggleHeaderModal);

  function toggleHeaderModal() {
    refs.modalHeader.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
})();
