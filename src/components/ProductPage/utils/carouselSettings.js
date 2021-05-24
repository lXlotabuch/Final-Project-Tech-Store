import { forDesktop } from '../../../styles/mediaBreakPoints'

const carouselSettings = {
  dots: false,
  responsive: [
    {
      breakpoint: forDesktop.minWidth,
      settings: {
        dots: true
      }
    }
  ]
}

export default carouselSettings