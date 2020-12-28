function menuOpen() {
  document.getElementById("botn").onclick = function () {menuClose()}
  document.getElementById("menu").style.setProperty('--menu', '0%');
  document.getElementById("gut").style.setProperty('--gut', '70%');
}

function menuClose() {
  document.getElementById("botn").onclick = function () {menuOpen()}
  document.getElementById("menu").style.setProperty('--menu', '100%');
  document.getElementById("gut").style.setProperty('--gut', '100%');
}

setInterval( function () {
  if( mousey - window.pageYOffset < 80 ){
    document.getElementById("top").style.setProperty('--top', 'calc(100% - 80px)');
  }else{
    if( window.pageYOffset > 80 ){
      document.getElementById("top").style.setProperty('--top', '100%');
    }else{
      document.getElementById("top").style.setProperty('--top','calc(100% - ' + ( 80 - window.pageYOffset ) + 'px)');
    }
  }
},100)
