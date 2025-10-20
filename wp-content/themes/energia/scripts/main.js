jQuery(document).ready(function ($) {
    // Init Hero vertical slider
    if ($('.feedbacks-container').length){
        $('.feedbacks-container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a href="#" class="custom-slick-prev"></a>',
            nextArrow: '<a href="#" class="custom-slick-next"></a>',
        });
    }
    if ($('.models-container_items-container').length){
        $('.models-container_items-container').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="custom-slick-prev"></button>',
            nextArrow: '<button type="button" class="custom-slick-next"></button>',
            responsive: [
                {
                  breakpoint: 1399,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }
    if ($('.partners-section_items-container').length){
        $('.partners-section_items-container').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<a href="#" class="custom-slick-prev"></a>',
            nextArrow: '<a href="#" class="custom-slick-next"></a>',
            responsive: [
                {
                  breakpoint: 1399,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });
    }

    function chatToggleVisibility () {
        try {
            $('.whatsup-icon').click(function(){
                $('.close-icon').toggleClass('show hide');
                $('.whatsup-icon').toggleClass('show hide');
            })
            $('.close-icon').click(function(){
                $('.close-icon').toggleClass('show hide');
                $('.whatsup-icon').toggleClass('show hide');
            })
        } catch (err) {
            console.log(err);
        }
    }

    chatToggleVisibility();

    function moveToDataUrl() {
      document.querySelectorAll('.link-item').forEach(item => {
        item.addEventListener('click', () => {
          const url = item.getAttribute('data-url');
          if (url) {
            window.location.href = url;
          }
        });
      });
      
    } 
    if(document.querySelectorAll('.link-item')) {
      moveToDataUrl()
    }

    function openMenu() {
      const burger = document.querySelector('.header-wrap-burger');
      const menuWrap = document.querySelector('.hero-section_header-nav-buttons-container');
      //const headerWrap = document.querySelector('.header-wrap ');
      const close = document.querySelector('.icon-bar-close');
      //const headerMenuContainer = document.querySelector('.menu-header_menu-container');
      //const headerMenuContainerEng = document.querySelector('.info__menu-burger');
  
      //const cleaningBurger = document.querySelector('.info__menu-burger');
      //const headerTabs = document.querySelector('.header-tabs');
      //const headerWrap = document.querySelector('.header-wrap ');
  
      burger.addEventListener('click', function() {
          menuWrap.setAttribute('style', 'transform: translateX(0);');
          //headerWrap.setAttribute('style', 'transform: translateX(0);overflow: visible;');
      })
      close.addEventListener('click', function() {
          menuWrap.setAttribute('style', 'transform: translateX(115%);');
          //headerWrap.setAttribute('style', 'transform: translateX(0);overflow: hidden;');
      })
      // const max = window.matchMedia("(max-width: 500px)")
      // if(cleaningBurger && max.matches) {
      //     cleaningBurger.addEventListener('click', function() {
      //         headerTabs.setAttribute('style', 'transform: translate(-25px,50%);');
      //         //headerWrap.setAttribute('style', 'transform: translateX(0);overflow: visible;');
      //     })
      //     headerTabs.addEventListener('click', function() {
      //         headerTabs.setAttribute('style', 'transform: translate(115%,50%);');
  
      //     })
      // }
      // var x = window.matchMedia("(max-width: 1150px)")
      // if (x.matches) { // If media query matches
      //     if(headerMenuContainer) {
      //         headerMenuContainer.addEventListener('click', function() {
      //             menuWrap.setAttribute('style', 'transform: translateX(115%);');
      //             headerWrap.setAttribute('style', 'transform: translateX(-16px);overflow: hidden;');
      //         })
      //     }
          
      //   } else {
      //     return false
      //   }
  }
  openMenu()
});