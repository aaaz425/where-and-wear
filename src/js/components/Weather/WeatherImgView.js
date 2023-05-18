import { ViewComponent } from '../../core/ViewComponent.js';

export class WeatherImgView extends ViewComponent {
  constructor(target, data) {
    super(target);
    this.data = data;
    this.render();
  }

  getTemplate(data) {
    return `
      <img class="weather-img" src="${data.male.step1.shoes[0].img}" alt="" />
    `;
  }

  async render() {
    this.target.insertAdjacentHTML('beforeend', await this.getTemplate(this.data));
  }
}
