var main = {
  init: function(){
    main.initCarouselVideos();
    main.initAOS();
  },
  initAOS: function(){
    AOS.init();
  },

  initCarouselVideos: function(){
    let myCarousel = document.getElementById("carouselDarkVariant");
    if(myCarousel) {
      myCarousel.addEventListener("slide.bs.carousel", function () {
        let video_1 = document.querySelector(".video-in-this-1");
        let video_1_src = video_1.getAttribute("src");
        video_1.setAttribute("src", video_1_src);

        let video_2 = document.querySelector(".video-in-this-2");
        let video_2_src = video_2.getAttribute("src");
        video_2.setAttribute("src", video_2_src);

        let video_3 = document.querySelector(".carousel-item video");
        video_3.pause();
      });    
    }
  }
};

main.init();


