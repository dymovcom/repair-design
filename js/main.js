// document.addEventListener("DOMContentLoaded", function(event) {
//   const modal = document.querySelector(".modal");
//   const modalButton = document.querySelectorAll("[data-toggle=modal]");
//   const closeButton = document.querySelector(".modal__close");
//   const switchModal = () => {
//     modal.classList.toggle("modal--visible");
//   }
//   modalButton.forEach(element => {
//     element.addEventListener("click", switchModal);
//   });
//   closeButton.addEventListener("click", switchModal);
//   document.addEventListener("click", function(e) {
//     console.log(e.target);
//     if (e.target.classList.contains('modal')) {
//       switchModal();
//     }
//   });
//   document.addEventListener('keyup', function (e) {
//     console.log(e.code);
    
//     if (e.keyCode === 27 && modal.classList.contains('modal--visible')) {
//       switchModal();
//     }
//   });
// });

$(document).ready(function () {
  var modal       = $('.modal'),
      modalButton = $('[data-toggle=modal]'),
      closeButton = $('.modal__close');

  modalButton.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeButton.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).click(function (e) {
    if ($(e.target).is('.modal')) {
      modal.toggleClass('modal--visible');
    }
  });
  $(document).on('keydown', function(e) {
    if (e.keyCode === 27 && modal.hasClass('modal--visible'))
      modal.toggleClass('modal--visible');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      if ($('#upbutton').is(':hidden')) {
        $('#upbutton').css({opacity : 0.5}).fadeIn('slow');
      }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
  });
  $('#upbutton').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 800);
  }); 

});