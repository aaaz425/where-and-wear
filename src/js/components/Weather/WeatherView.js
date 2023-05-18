import { ViewComponent } from '../../core/ViewComponent.js';

export class WeatherView extends ViewComponent {
  getTemplate() {
    return `
      <div class="weather-tab">
        <span class="weather-header">오늘의 날씨</span>
        <div class="weather-info">
          <div class="weather-detail"></div>
        </div>
      </div>
    `;
  }

  render() {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate());
  }
}
