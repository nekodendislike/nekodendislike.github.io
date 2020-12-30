var mousey = 0
document.body.addEventListener("mousemove",function(a){mousey=a.pageY;})
function include( license , url ) {
  let head = `
<link rel="icon" href="/8554D67B-88CE-4EB0-8263-1BADA3AC6DAC.ico">
<link rel="stylesheet" href="/Basev2.css">
<title>nyankotrainのお部屋</title>
`
  let body = `
<div id="top">
  <div class="home">
    <a href="/">
      <img src="/icon.png" width="60" height="60">
      <font size="5" class="gazoyoko">Home</font>
    </a>
  </div>
  <div class="ma">
    <div class="profile">
      <a href="/profile">
        <font size="5">Profile</font>
      </a>
    </div>
    <div class="list">
      <a href="/list">
        <font size="5">記事一覧</font>
      </a>
    </div>
    <div class="toollist">
      <a href="/toollist">
        <font size="5">ツール一覧</font>
      </a>
    </div>
    <div class="Scratch">
      <a href="//scratch.mit.edu/users/yukku">
        <font size="5">Scratchのプロフ</font>
      </a>
    </div>
    <div class="comment">
      <a href="//scratch.mit.edu/studios/28405354/comments">
        <font size="5">コメントする</font>
      </a>
    </div>
  </div>
  <div class="menu" id="botn" onclick="menuOpen()">
    <svg viewBox="0 0 60 60" width="60" height="60">
      <line x1="10" y1="15" x2="50" y2="15" stroke="#fff" stroke-width="5"/>
      <line x1="10" y1="30" x2="50" y2="30" stroke="#fff" stroke-width="5"/>
      <line x1="10" y1="45" x2="50" y2="45" stroke="#fff" stroke-width="5"/>
    </svg>
  </div>
</div>
<div id="menu"></div>
<div id="gut">
  <h2 class="s0">相互リンク</h2>
<div class="underline"></div>
<span><img src="https://uploads.scratch.mit.edu/users/avatars/33702239.png" width="30" height="30"><font class="gazoyoko"><a href="//tsumuri3.github.io/homepage/tsumuri">tsumuri3のホームページ</a> by<a href="//scratch.mit.edu/users/tsumuri3">tsumuri3</a></font></span><br>
<span><img src="https://uploads.scratch.mit.edu/users/avatars/42107291.png" width="30" height="30"><font class="gazoyoko"><a href="//bsahd.github.io">bsahdのページ</a> by<a href="//scratch.mit.edu/users/bsahd">bsahd</a></font></span><br>
<span><img src="https://uploads.scratch.mit.edu/users/avatars/19147035.png" width="30" height="30"><font class="gazoyoko"><a href="//neko001robov.github.io">nyankotrainのお部屋</a> by<a href="//scratch.mit.edu/users/nyankotrain">nyankotrain</a></font></span>
  <h2 class="s0">更新情報</h2>
<div class="underline"></div>
  <h3>2020/12/25</h3>こういう飛び出るメニューを作りました。
  <h3>2020/12/24</h3>このサイトを1から作りました。
</div>
<div class="main">
`
  let a = '</div>このページのライセンスは<a href="https://creativecommons.org/licenses/' + url + '/deed.ja">' + license + '</a>です。' + ( license == 'CC BY 4.0' ?'つまりクレジットだけ書いておけば自由にプログラムとかを使っていい感じのページです。':'') + '</body></html>'
  body = body + document.body.innerHTML + a
  document.body.innerHTML = body
  document.getElementsByTagName('head')[0].innerHTML = head
  document.body.style = ''
}

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
