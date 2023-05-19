import { $ } from '../../utils.js';
import { setCurrentPosition } from '../../utils.js';

export class SliderController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    const address = await this.model.getCurrentAddress();
    const location = await setCurrentPosition(address);
    const fetchedData = await this.model.fetchData();

    this.view.render(
      fetchedData.district[location].restaurant,
      fetchedData.district[location].cafe,
      fetchedData.district[location].activity
    );

    this.setEvent();
  }

  setEvent() {
    this.handleSlider('.place-restaurant');
    this.handleSlider('.place-cafe');
    this.handleSlider('.place-activity');
  }

  handleSlider(sliderClass) {
    const SLIDE_MARGIN = 42;
    const sliderElement = document.querySelector(sliderClass);
    const sliderContainer = sliderElement.querySelector('.recommend-img_slider');
    const preBtn = sliderElement.querySelector('.pre-btn');
    const nextBtn = sliderElement.querySelector('.next-btn');
    const sliderItems = sliderElement.querySelectorAll('.place-list');
    const itemWidth = sliderItems[0].offsetWidth;
    const stepSize = itemWidth + SLIDE_MARGIN;

    let currentPosition = 0;

    preBtn.addEventListener('click', () => {
      if (currentPosition >= 0) return;
      currentPosition += stepSize;
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    nextBtn.addEventListener('click', () => {
      if (currentPosition < -stepSize) return;
      currentPosition -= stepSize;
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
      sliderContainer.style.transition = `all 500ms ease`;
    });
  }
}
