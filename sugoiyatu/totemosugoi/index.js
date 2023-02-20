$(function () {
  function end_loader() {
    $('.sk-cube-grid').fadeOut(800);
  }
  $(window).on('load', function () {
    setTimeout(function () {
      end_loader();
    }, 3000)
  })
})
