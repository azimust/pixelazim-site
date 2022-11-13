let swiper = new Swiper(".mySwiper",{
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
   
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
     coverflowEffect:{
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination:{
        el: ".swiper-pagination"
    },
});