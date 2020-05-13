document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector(".modal");
  const modalButton = document.querySelectorAll("[data-toggle=modal]");
  const closeButton = document.querySelector(".modal__close");
  const switchModal = () => {
    modal.classList.toggle("modal--visible");
  }

  modalButton.forEach(element => {
    element.addEventListener("click", switchModal);
  });

  closeButton.addEventListener("click", switchModal);

  document.addEventListener("click", function(e) {
    console.log(e.target);
    if (e.target.classList.contains('modal')) {
      switchModal();
    }
  });

  document.addEventListener('keyup', function (e) {
    console.log(e.code);
    
    if (e.keyCode === 27) {
      switchModal();
    }
  });
  
  
});