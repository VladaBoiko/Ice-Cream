(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal-locations]'),
    closeModalBtn: document.querySelector('[data-modal-close-locations]'),
    modal: document.querySelector('[data-modal-locations]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('noscroll');
    refs.modal.classList.toggle('backdrop-location--is-hidden');
  }
})();
