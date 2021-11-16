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
