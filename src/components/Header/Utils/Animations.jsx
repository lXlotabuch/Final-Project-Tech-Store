export const openSlide = {
  show: {
    clipPath: 'circle(2200px at 40px 40px)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      duration: 0.1
    }
  },
  hidden: {
    clipPath: 'circle(0.1px at 0.1px 0.1px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

export const openSlideUser = {
  show: {
    opacity: 1,
    x: -180,
    scale: 1,
    transition: {
      type: 'tween',
      stiffness: 200,
      damping: 40,
      duration: 0.4
    }
  },
  hidden: {
    x: -180,
    scale: 0,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 40
    },
    originX: 0.9,
    originY: 0,
  }
};
export const openSlideShadule = {
  show: {
    y: 0,
    transition: {
      type: 'tween',
      stiffness: 200,
      duration: 0.4
    }
  },
  hidden: {
    y: -250,
    transition: {
      type: 'tween',
      stiffness: 20,
      damping: 2
    }
  }
};