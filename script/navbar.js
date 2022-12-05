$(function () {
     $(document).scroll(function () {
          var $nav = $(".navbar-fixed-top");
          $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
     });
});

const body = document.querySelector("body"),
     nav = document.querySelector("nav"),
     sidebarOpen = document.querySelector(".sidebarOpen"),
     sidebarClose = document.querySelector(".sidebarClose");

//js sidebar
sidebarOpen.addEventListener("click", () => {
     nav.classList.add("active");
})

body.addEventListener("click", e => {
     let clickedElm = e.target;

     if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
          nav.classList.remove("active");
     }
})


//onepagescroll
// if ($('a[href^="#"]').length) {
//      $('a[href^="#"]').click(function (){
//           $('html,body').animate({
//                scrollTop: $($(this).attr('href')).offset().top - 100
//           }, 'slow', 'swing');
//           return false;
//      });
// }

// function onePageNav(switchName) {
//      const navSwitch = $(switchName);
//      const deductHeight = 100;
//      let navArr = [];


//      navSwitch.each(function (i) {
//           let navSwitchHref = $(this).attr('href');
//           let tgtOff = $(navSwitchHref).offset().top - deductHeight;
//           navArr.push([]);
//           navArr[i].switch = $(this);
//           navArr[i].tgtOff = tgtOff;
//      });
//      console.log(navArr);
//      $(window).scroll(function () {
//           for (let i = 0; i < navArr.length; i++) {
//                let scroll = $(window).scrollTop();
//                let tgtKey = navArr[i];
//                let tgtSwitch = tgtKey.switch;
//                let tgtOff = tgtKey.tgtOff;
//                if (scroll >= tgtOff) {
//                     navSwitch.removeClass('is-current');
//                     tgtSwitch.addClass('is-current');
//                } else {
//                     tgtSwitch.removeClass('is-current');
//                }
//           }
//      });
// }
// $(window).on('load resize', function () {
//      onePageNav('.nav-item');
// });


//scrolltotop
let mybutton = document.getElementById("btn-top");

window.onscroll = function () {
     scrollFunction()
};

function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
     } else {
          mybutton.style.display = "none";
     }
}

function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
}