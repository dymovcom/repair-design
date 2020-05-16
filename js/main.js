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

  //initialize swiper when document ready
  let mySwiper = new Swiper ('.swiper-container__project', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next    = $('.swiper-button-next-project');
  var prev    = $('.swiper-button-prev-project');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20);
  bullets.css('left', prev.width() + 20);


  var mySwiperSteps = new Swiper ('.swiper-container__steps', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next-steps',
      prevEl: '.swiper-button-prev-steps',
    },
  });

  var mySwiperStepsImg = new Swiper ('.swiper-container__steps-img', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    pagination: {
      el: '.swiper-pagination-step',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next-steps',
      prevEl: '.swiper-button-prev-steps',
    },
  });

  var nextStep    = $('.swiper-button-next-step');
  var prevStep    = $('.swiper-button-prev-step');
  var bulletsStep = $('.swiper-pagination');

  nextStep.css('left', 280);
  bulletsStep.css('left', prevStep.width() + 20);

  


  function activeSlide(index) {
    let activeStep = document.querySelectorAll('.steps__step--active');
    for (let step of activeStep) {
      step.classList.toggle("steps__step--active");
    }

    $('.swiper-pagination-top').text(index + '/6');
  }

  document.querySelector('.swiper-button-prev-steps').addEventListener('click', () => {
    index = mySwiperSteps.activeIndex;
    if (index < 1) index = 6;
    activeSlide(index);
    indexStep = '.steps__step--' + index;
    document.querySelector(indexStep).classList.toggle("steps__step--active");
  });

  document.querySelector('.swiper-button-next-steps').addEventListener('click', () => {
    index = mySwiperSteps.activeIndex;
    if (index > 6) index = 1;
    activeSlide(index);
    indexStep = '.steps__step--' + index;
    document.querySelector(indexStep).classList.toggle("steps__step--active");
  });


  document.querySelector('.steps__step--1').addEventListener('click', () => {
    activeSlide(1);
    mySwiperSteps.slideTo(1);
    mySwiperStepsImg.slideTo(1);
    document.querySelector('.steps__step--1').classList.toggle("steps__step--active");
  });
  document.querySelector('.steps__step--2').addEventListener('click', () => {
    activeSlide(2);
    mySwiperSteps.slideTo(2);
    mySwiperStepsImg.slideTo(2);
    document.querySelector('.steps__step--2').classList.toggle("steps__step--active");
  });
  document.querySelector('.steps__step--3').addEventListener('click', () => {
    activeSlide(3);
    mySwiperSteps.slideTo(3);
    mySwiperStepsImg.slideTo(3);
    document.querySelector('.steps__step--3').classList.toggle("steps__step--active");
  });
  document.querySelector('.steps__step--4').addEventListener('click', () => {
    activeSlide(4);
    mySwiperSteps.slideTo(4);
    mySwiperStepsImg.slideTo(4);
    document.querySelector('.steps__step--4').classList.toggle("steps__step--active");
  });
  document.querySelector('.steps__step--5').addEventListener('click', () => {
    activeSlide(5);
    mySwiperSteps.slideTo(5);
    mySwiperStepsImg.slideTo(5);
    document.querySelector('.steps__step--5').classList.toggle("steps__step--active");
  });
  document.querySelector('.steps__step--6').addEventListener('click', () => {
    activeSlide(6);
    mySwiperSteps.slideTo(6);
    mySwiperStepsImg.slideTo(6);
    document.querySelector('.steps__step--6').classList.toggle("steps__step--active");
  });
  
});