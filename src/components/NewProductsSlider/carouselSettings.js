const carouselSettings = {
  slidesToShow: 5,
  slidesToScroll: 3,
  dots: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
      }
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    }
  ]
}
export default carouselSettings