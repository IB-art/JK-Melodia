$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var floorPath = $('.home-image path'); //каждый отдельный этаж в SVG
  var counterUp = $('.counter-up'); //кнопка увеличения этажа
  var counterDown = $('.counter-down'); //кнопка уменьшения этажа
  var modal = $('.modal'); // модальное окно
  var btnPrimary = $('.button-primary'); ///- Эту функцию я написала  button (Смотреть квартиры на этаже)
  var modalCloseBtn = $('.modal-close-button'); ///- Эту функцию я написала  button (крестик)
  

  //функция при наведении мышью на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor');// получаем значение текущего этажа
    $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on('click', toggleModal);  //при клике на этаж у модального окна(modal) будет появляться класс(is-open)
      

  btnPrimary.on('click', toggleModal); // при клике на button (Смотреть квартиры на этаже) будет появляться модальное окно
      ///- Эту функцию я написала

  modalCloseBtn.on('click', toggleModal); // при клике на button-крестик (modal-close-button) будет закрываться модальное окно
    

  //отслеживаем клик по кнопке вверх
  counterUp.on('click', function () { 
    // проверяем значение этажа, оно не должно быть больше 18
    if (currentFloor < 18) { 
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажем, что бы было не 1, а 01
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });

  //отслеживаем клик по кнопке вниз
  counterDown.on('click', function () {
    // проверяем значение этажа, оно не должно быть меньше 2
    if (currentFloor >2) {
      currentFloor--; // убавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажем, что бы было не 1, а 01
      $('.counter').text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж
    }
  });

  function toggleModal () { //  у нас эта функция прописывалась в разных места одинаково (modal.toggleClass('is-open');), поэтому мы ее назвали(function toggleModal), это типа закрыть или открыть модальное окно
    modal.toggleClass('is-open');
  }


  // бургер-меню
  $('.menu__btn').on('click', function(){
    $('.navbar-menu').toggleClass('navbar-menu--active');
  });


});



