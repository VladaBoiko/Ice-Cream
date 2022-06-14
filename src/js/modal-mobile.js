(() => {
  const refs = {
    openHeaderModalMobileBtn: document.querySelector('.js-header-modal-open-mobile'),
    
    closeHeaderModalBtn: document.querySelector('.js-header-modal-close'),
    modalHeader: document.querySelector('.js-header-modal'),
    body: document.querySelector('body'),
  };

  refs.openHeaderModalMobileBtn.addEventListener('click', toggleHeaderModal);
  refs.closeHeaderModalBtn.addEventListener('click', toggleHeaderModal);

  function toggleHeaderModal() {
    refs.modalHeader.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
})();