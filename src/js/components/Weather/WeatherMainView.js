import { ViewComponent } from '../../core/ViewComponent.js';

export class WeatherMainView extends ViewComponent {
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
}
