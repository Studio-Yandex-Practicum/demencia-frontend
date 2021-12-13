const sponsorsSwiper = new Swiper('.sponsors__swiper', {

    navigation: {
        nextEl: '.sponsors__swiper-button-next',
        prevEl: '.sponsors__swiper-button-prev'
    },

    spaceBetween: -20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    speed: 1000,
    breakpoints: {
        319: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 4,
        },
        860: {
            slidesPerView: 5,
        }
    },
    ally: {
        enabled: true,
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
    }
});

const wNewSlider = new Swiper('.w-new__slider', {
    navigation: {
        nextEl: '.w-new__slider-button-next',
        prevEl: '.w-new__slider-button-prev',
    },
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 1500,
      stopOnLastSlide: false,
      disableOnInteraction: true
  },

    speed: 1000,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        350: {
            spaceBetween: 80,
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 90,
        },
        410: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        520: {

            spaceBetween: 40,
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },

});

const articleSwiper = new Swiper(".article-slider__swiper", {
    navigation: {
        nextEl: ".article-slider__button-next",
        prevEl: ".article-slider__button-prev",
    },
    pagination: {
        el: ".article-slider__pagination",
        clickable: true,
    },
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true
    },
    speed: 1500,
});

const popupMenu = document.querySelector(".popup_type_menu");
const buttonOpenPopup = document.querySelector(".header__burger");
const buttonClosePopup = document.querySelector(".popup__close-button_type_menu");
const pageBody = document.querySelector(".body");
const burgerLink = document.querySelector(".popup__links");

const openPopup = function(popup) {
    popup.classList.add("popup_opened");
};

const closePopup = function(popup) {
    popup.classList.remove("popup_opened");
};

const bodyLock = function(body) {
    body.classList.add("body_locked");
};

const bodyUnlock = function(body) {
    body.classList.remove("body_locked");
};

buttonOpenPopup.addEventListener("click", function() { openPopup(popupMenu), bodyLock(pageBody) });
buttonClosePopup.addEventListener("click", function() { closePopup(popupMenu), bodyUnlock(pageBody) });

popupMenu.addEventListener("click", function(evt) {
    if (evt.target === evt.currentTarget) {
        closePopup(popupMenu);
        bodyUnlock(pageBody);
    }
});

burgerLink.addEventListener("click", function() { closePopup(popupMenu), bodyUnlock(pageBody) });


let animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }

        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

const regionPerm = document.querySelector(".map-section_region_perm");
const backgroundPerm = document.querySelector(".map-element_region_perm");
const backgroundVolgograd = document.querySelector(".map-element_region_volgograd");
const backgroundRostov = document.querySelector(".map-element_region_rostov");
const regionVolgograd = document.querySelector(".map-section_region_volgograd");
const regionRostov = document.querySelector(".map-section_region_rostov");
const popupPerm = document.querySelector(".map__popup_city_perm");
const popupVolgograd = document.querySelector(".map__popup_city_volgograd");
const popupRostov = document.querySelector(".map__popup_city_rostov");

if(document.getElementById('map')) {
  regionPerm.addEventListener('mouseenter', function() {
    backgroundPerm.setAttribute('style','fill: rgb(109, 9, 122)'),
    popupPerm.removeAttribute('display','none');
  }
  );
  regionPerm.addEventListener('mouseleave', () => {
    backgroundPerm.setAttribute('style','fill: #9a34a8'),
    popupPerm.setAttribute('display','none');
  }
  );

  regionVolgograd.addEventListener('mouseenter', function() {
    backgroundVolgograd.setAttribute('style','fill: rgb(109, 9, 122)'),
    popupVolgograd.removeAttribute('display','none');
  }
  );

  regionVolgograd.addEventListener('mouseleave', () => {
    backgroundVolgograd.setAttribute('style','fill: #9a34a8'),
    popupVolgograd.setAttribute('display','none');
  }
  );

  regionRostov.addEventListener('mouseenter', function() {
    backgroundRostov.setAttribute('style','fill: rgb(109, 9, 122)'),
    popupRostov.removeAttribute('display','none');
  }
  );

  regionRostov.addEventListener('mouseleave', () => {
    backgroundRostov.setAttribute('style','fill: #9a34a8'),
    popupRostov.setAttribute('display','none');
  }
  );
}






