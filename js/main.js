$(document).ready(function () {
  
  var modal       = $('.modal-primary'),
      modalButton = $('[data-toggle=modal]'),
      closeButton = $('.modal__close');

  modalButton.on('click', function () {
    modal.addClass('modal--visible');
  });
  closeButton.on('click', function () {
    modal.removeClass('modal--visible');
  });
  $(document).click(function (e) {
    if ($(e.target).is('.modal-primary')) {
      modal.removeClass('modal--visible');
    }
  });
  $(document).on('keydown', function(e) {
    if (e.keyCode === 27 && (modal.hasClass('modal--visible'))) {
      modal.removeClass('modal--visible');
    }
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
  

  // инициализация WOW.js
  new WOW().init();

  // валидация форм
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Не меньше {0} символов"),
        maxlength: jQuery.validator.format("Не больше {0} символов")
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox: "Подтвердите соглашение"
    },
    // submitHandler: function(form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       // console.log('Ajax сработал. Ответ сервера: ' + response);
    //       $(form)[0].reset();
    //       // $('.modal__form').addClass('modal__form--close');
    //       // $('.modal-primary__title').html('Спасбо за заявку! Наш менеджер свяжется с вами не позднее 15 минут!<br>А пока можете подписаться на нашу <a href="https://vk.com/dymovcom" class="lesson-link" target="_blank">группу</a> в Вконтакте!');
    //     }
    //   });
    // }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Не меньше {0} символов"),
        maxlength: jQuery.validator.format("Не больше {0} символов")
      },
      userPhone: "Заполните поле",
      policyCheckbox: "Подтвердите соглашение"
    },
    // submitHandler: function(form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       // console.log('Ajax сработал. Ответ сервера: ' + response);
    //       $(form)[0].reset();
    //       // $('.modal-thanks').addClass('modal--visible');
    //     }
    //   });
    // }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required",
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Не меньше {0} символов"),
        maxlength: jQuery.validator.format("Не больше {0} символов")
      },
      userPhone: "Заполните поле",
      userQuestion: "Заполните поле",
      policyCheckbox: "Подтвердите соглашение"
    },
    // submitHandler: function(form) {
    //   $.ajax({
    //     type: "POST",
    //     url: "send.php",
    //     data: $(form).serialize(),
    //     success: function (response) {
    //       // console.log('Ajax сработал. Ответ сервера: ' + response);
    //       $(form)[0].reset();
    //       // $('.modal-thanks').addClass('modal--visible');
    //     }
    //   });
    // }
  });


  $('[type=tel').mask('+7 (000) 000-00-00');

  var loadMap = false;
  $(window).scroll(function() {
    if (($(this).scrollTop() > 3000) && !loadMap) {
      // alert('ok');
      loadMap = true;
      // var elem = document.createElement('script');
      // elem.src = 'https://api-maps.yandex.ru/2.1/?load=package.map&apikey=4d06fd11-2e89-4683-b283-c394a20d9ddc&lang=ru_RU';
      // document.getElementsByTagName('body')[0].appendChild(elem);

      var myMap = new ymaps.Map('map', {
        center: [55.786852, 49.142351],
        zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Наш офис',
          balloonContent: 'Вход со двора'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/marker.svg',
          // Размеры метки.
          iconImageSize: [30, 30],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });
  myMap.behaviors.disable('scrollZoom'); 
  myMap.geoObjects
      .add(myPlacemark);
    }
  });
  
// Как только будет загружен API и готов DOM, выполняем инициализацию

// Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
//   ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//             center: [55.786852, 49.142351],
//             zoom: 17
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         // Создаём макет содержимого.
//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//         ),
//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//             hintContent: 'Наш офис',
//             balloonContent: 'Вход со двора'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: 'img/marker.svg',
//             // Размеры метки.
//             iconImageSize: [30, 30],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         });
//     myMap.behaviors.disable('scrollZoom'); 
//     myMap.geoObjects
//         .add(myPlacemark);
// });


});