(() => {
    const refs = {
      openHeaderModalBtn: document.querySelector(".js-header-modal-open"),
      closeHeaderModalBtn: document.querySelector(".js-header-modal-close"),
      modalHeader: document.querySelector(".js-header-modal"),
  
      openCowModalBtn: document.querySelector(".js-cow-modal-open"),
      closeCowModalBtn: document.querySelector(".js-cow-modal-close"),
      modalCow: document.querySelector(".js-cow-modal"),
  
      openLocationModalBtn: document.querySelector(".js-location-modal-open"),
      closeLocationModalBtn: document.querySelector(".js-location-modal-close"),
      modalLocation: document.querySelector(".js-location-modal"),
      
      openFranchiseModalBtn: document.querySelector(".js-franchise-modal-open"),
      closeFranchiseModalBtn: document.querySelector(".js-franchise-modal-close"),
      modalFranchise: document.querySelector(".js-franchise-modal"),
  
      body: document.querySelector("body"),
    };
  
    refs.openHeaderModalBtn.addEventListener("click", toggleHeaderModal);
    refs.closeHeaderModalBtn.addEventListener("click", toggleHeaderModal);
  
    refs.openCowModalBtn.addEventListener("click", toggleCowModal);
    refs.closeCowModalBtn.addEventListener("click", toggleCowModal);
  
    refs.openLocationModalBtn.addEventListener("click", toggleLocationModal);
    refs.closeLocationModalBtn.addEventListener("click", toggleLocationModal);
  
    refs.openFranchiseModalBtn.addEventListener("click", toggleFranchiseModal);
    refs.closeFranchiseModalBtn.addEventListener("click", toggleFranchiseModal);
  
    function toggleHeaderModal() {
      refs.modalHeader.classList.toggle("is-hidden");
      refs.body.classList.toggle("noscroll");
    }
    function toggleCowModal() {
      refs.modalCow.classList.toggle("is-hidden");
      refs.body.classList.toggle("noscroll");
    }
    function toggleLocationModal() {
      refs.modalLocation.classList.toggle("is-hidden");
      refs.body.classList.toggle("noscroll");
    }
    function toggleFranchiseModal() {
      refs.modalFranchise.classList.toggle("is-hidden");
      refs.body.classList.toggle("noscroll");
    }
  })();