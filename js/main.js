$(document).ready(function () {
  $('.menu-btn').click(function (event) {
    $('.menu-btn,.menu__list').toggleClass('active')
  });
})

// $('.js-trigger').click(function () {
//   $(this).next().slideToggle(320)
//   $('.menu,.js-trigger').toggleClass('active')
// });

$(document).ready(function () {
  let path = location.pathname === '/work.html' ? '/works.html' : location.pathname

  $('.js-menu').find(`[href="${path}"]`).addClass('menu__link--current')
})
