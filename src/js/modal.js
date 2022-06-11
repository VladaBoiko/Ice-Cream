(() => {
  const refs = {
    openHeaderModalBtn: document.querySelector('.js-header-modal-open'),
    closeHeaderModalBtn: document.querySelector('.js-header-modal-close'),
    modalHeader: document.querySelector('.js-header-modal'),

    openCowModalBtn: document.querySelector('.js-cow-modal-open'),
    closeCowModalBtn: document.querySelector('.js-cow-modal-close'),
    modalCow: document.querySelector('.js-cow-modal'),

    openFranchiseModalBtn: document.querySelector('.js-franchise-modal-open'),
    closeFranchiseModalBtn: document.querySelector('.js-franchise-modal-close'),
    modalFranchise: document.querySelector('.js-franchise-modal'),

    body: document.querySelector('body'),
  };
  if (refs.openHeaderModalBtn && refs.closeHeaderModalBtn) {
    refs.openHeaderModalBtn.addEventListener('click', toggleHeaderModal);
    refs.closeHeaderModalBtn.addEventListener('click', toggleHeaderModal);
  }
  if (refs.openCowModalBtn && refs.closeCowModalBtn) {
    refs.openCowModalBtn.addEventListener('click', toggleCowModal);
    refs.closeCowModalBtn.addEventListener('click', toggleCowModal);
  }

  if (refs.openFranchiseModalBtn && refs.closeFranchiseModalBtn) {
    refs.openFranchiseModalBtn.addEventListener('click', toggleFranchiseModal);
    refs.closeFranchiseModalBtn.addEventListener('click', toggleFranchiseModal);
  }

  function toggleHeaderModal() {
    refs.modalHeader.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
  function toggleCowModal() {
    refs.modalCow.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
  function toggleFranchiseModal() {
    refs.modalFranchise.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
})();
