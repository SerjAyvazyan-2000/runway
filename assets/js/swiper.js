const bWorkSwiper = new Swiper(".b-work-swiper", {
  slidesPerView: 3,
  spaceBetween: 21,
    autoHeight: true,

  pagination: {
    el: ".b-work-pagination",
    clickable: true,
  },
  loop: true,

  breakpoints: {
    320: { slidesPerView: 1 },
    500: { slidesPerView: 1.5 },
    626: { slidesPerView: 2 },
    830: { slidesPerView: 2.3 },
    1000: { slidesPerView: 2.5 },
    1200: { slidesPerView: 3 },
  },
});

let swiper = new Swiper(".b-possibilities-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,

  pagination: {
    el: ".b-possibilities-pagination",

    type: "custom",
    renderCustom: function (swiper) {
      const current = swiper.realIndex + 1;
      const total = swiper.slides.length;
      return `<span>${current}<span/> <b>из ${total}<b/> `;
    },
    //    renderCustom: function (swiper) {
    //   let total = swiper.slides.length;
    //   let current = swiper.activeIndex + swiper.params.slidesPerView;

    //   if (current > total) current = total;

    //   return `<span>${current}</span> <b>из ${total}</b>`;
    // }
  },

    breakpoints: {
    320: { slidesPerView: 1.1 ,spaceBetween: 10,},
    600: { slidesPerView: 2 },
    960: { slidesPerView: 3 },
    1056: { slidesPerView: 3.5 },
    1200: { slidesPerView: 4 },
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
