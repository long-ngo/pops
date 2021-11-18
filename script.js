// header
const header = document.querySelector('#header');
window.onscroll = function () {
  if (this.pageYOffset == 0) {
    header.classList.remove('header-scroll');
  } else {
    header.classList.add('header-scroll');
  }
};

// slider
const sliderItem = document.querySelectorAll('.slider-item');
const sliderDot = document.querySelectorAll('.slider-dot');

for (let i = 0, l = sliderDot.length; i < l; i++) {
  sliderDot[i].addEventListener('click', () => {
    sliderAuto(i);
  });
}

const sliderAuto = (index) => {
  for (let i = 0, l = sliderItem.length; i < l; i++) {
    sliderDot[i].classList.remove('slider-dot--active');
    sliderItem[i].classList.remove('slider-item--active');
  }

  sliderDot[index].classList.toggle('slider-dot--active');
  sliderItem[index].classList.toggle('slider-item--active');
};

//slider run auto
(() => {
  let index = 0;
  let length = sliderDot.length;
  return setInterval(() => {
    sliderAuto(index);
    index < length - 1 ? index++ : (index = 0);
  }, 9000);
})();

// slick controll
const slickControl = document.querySelectorAll('.slick-controll__btn');

(() => {
  let index = 0;
  let indexCount = 87.5;
  return (slickScroll = (i) => {
    const slickTrack =
      slickControl[i].parentElement.parentElement.parentElement;
    const slickTrackWrapper = slickTrack.querySelector('.slick-track__wrapper');
    const slickTrackItem = slickTrack.querySelectorAll('.slick-track__item');

    if (slickControl[i].classList.contains('slick-controll__btn--next')) {
      slickTrackWrapper.style.transform = `translateX(${index - indexCount}vw)`;
      index -= 87.5;
    } else {
      slickTrackWrapper.style.transform = `translateX(${index + indexCount}vw)`;
      index += 87.5;
    }
  });
})();

for (let i = 0, l = slickControl.length; i < l; i++) {
  slickControl[i].addEventListener('click', () => {
    slickScroll(i);
  });
}
