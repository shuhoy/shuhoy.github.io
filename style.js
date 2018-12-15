(function() {
var ripple, ripples, RippleEffect,loc, cover, coversize, style, x, y, i, num;

//クラス名rippleの要素を取得
ripples = document.querySelectorAll('.ripple');

//位置を取得
RippleEffect = function(e) {
ripple = this;//クリックされたボタンを取得
cover = document.createElement('span');//span作る
coversize = ripple.offsetWidth;//要素の幅を取得
loc = ripple.getBoundingClientRect();//絶対座標の取得
x = e.pageX - loc.left - window.pageXOffset - (coversize / 2);
y = e.pageY - loc.top - window.pageYOffset - (coversize / 2);
pos = 'top:' + y + 'px; left:' + x + 'px; height:' + coversize + 'px; width:' + coversize + 'px;';

//spanを追加
ripple.appendChild(cover);
cover.setAttribute('style', pos);
cover.setAttribute('class', 'rp-effect');//クラス名追加

//しばらくしたらspanを削除
setTimeout(function() {
var list = document.getElementsByClassName( "rp-effect" ) ;
for(var i =list.length-1;i>=0; i--){//末尾から順にすべて削除
list[i].parentNode.removeChild(list[i]);
}}, 2000)};
for (i = 0, num = ripples.length; i < num; i++) {
ripple = ripples[i];
ripple.addEventListener('mousedown', RippleEffect);
}
}());


var $body = $('body');
$('#side-nav-button').on('click', function () {
  $body.toggleClass('open');
});

$('.overlay').on('click', function () {
    $body.removeClass('open');
  });

  var $win = $(window),
       $main = $('.main'),
       $nav = $('#side-nav-button'),
       $arrowcta = $('.arrowCta'),
       navHeight = $nav.outerHeight(),
       navPos = $nav.offset().top,
       fixedClass = 'is-fixed';
       hideClass = 'is-hide'

   $win.on('load scroll', function() {
     var value = $(this).scrollTop();
     if ( value > navPos ) {
       $nav.addClass(fixedClass);
       $arrowcta.addClass(hideClass);
     } else {
       $nav.removeClass(fixedClass);
       $arrowcta.removeClass(hideClass);
     }
   });



   const imgs = document.querySelectorAll(".container img");
   const dots = document.querySelectorAll(".dot i");
   const leftArrow = document.querySelector(".arrow-left");
   const rightArrow = document.querySelector(".arrow-right");

   let currentIndex = 0;
   let time = 5000; // default time for auto slideshow

   const defClass = (startPos, index) => {
     for (let i = startPos; i < imgs.length; i++) {
       imgs[i].style.display = "none";
       dots[i].classList.remove("fa-dot-circle");
       dots[i].classList.add("fa-circle");
     }
     imgs[index].style.display = "block";
     dots[index].classList.add("fa-dot-circle");
   };

   defClass(1, 0);

   leftArrow.addEventListener("click", function(){
     currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
     defClass(0, currentIndex);
   });

   rightArrow.addEventListener("click", function(){
     currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
     defClass(0, currentIndex);
   });

   const startAutoSlide = () => {
     setInterval(() => {
       currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
       defClass(0, currentIndex);
     }, time);
   };

   startAutoSlide(); // Start the slideshow
