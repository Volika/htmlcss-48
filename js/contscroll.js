(() => {
  const refs = {
    openContBtn: document.querySelector(".menu-open-btn"),
    closeContBtn: document.querySelector(".menu-close-btn"),
    contscroll: document.querySelector(".mob-menu"),
  };

  refs.openContBtn.addEventListener("click", toggleMenu);
  refs.closeContBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('modal-open');
    refs.contscroll.classList.toggle("is-hidden");
  }

})();