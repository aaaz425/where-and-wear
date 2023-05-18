import { ViewComponent } from '../../core/ViewComponent.js';

export class WeatherDetailView extends ViewComponent {
  constructor(target, data) {
    super(target);
    this.data = data;
    this.render();
  }

  getTemplate(data) {
    return `
      <div class="temperature-wrapper">
        <span class="temperature">${data.TMP}°C</span>
        <div class="temperature-detail">
          <span class="temperature-max">최고 ${data.TMX}°C</span>
          <span class="temperature-min">최저 ${data.TMN}°C</span>
        </div>
      </div>
    `;
  }

  async render() {
    this.target.insertAdjacentHTML('beforeend', await this.getTemplate(this.data));
  }
}
