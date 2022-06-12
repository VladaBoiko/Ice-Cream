(() => {
  const refs = {
    openLocationModalBtn: document.querySelector('.js-location-modal-open'),
    closeLocationModalBtn: document.querySelector('.js-location-modal-close'),
    modalLocation: document.querySelector('.js-location-modal'),

    openFranchiseModalBtn: document.querySelector('.js-franchise-modal-open'),
    closeFranchiseModalBtn: document.querySelector('.js-franchise-modal-close'),
    modalFranchise: document.querySelector('.js-franchise-modal'),

    body: document.querySelector('body'),
  };
 
  if (refs.openLocationModalBtn && refs.closeLocationModalBtn) {
    refs.openLocationModalBtn.addEventListener('click', toggleLocationModal);
    refs.closeLocationModalBtn.addEventListener('click', toggleLocationModal);
  }
  if (refs.openFranchiseModalBtn && refs.closeFranchiseModalBtn) {
    refs.openFranchiseModalBtn.addEventListener('click', toggleFranchiseModal);
    refs.closeFranchiseModalBtn.addEventListener('click', toggleFranchiseModal);
  }

  function toggleLocationModal() {
    refs.modalLocation.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
  function toggleFranchiseModal() {
    refs.modalFranchise.classList.toggle('is-hidden');
    refs.body.classList.toggle('noscroll');
  }
})();
