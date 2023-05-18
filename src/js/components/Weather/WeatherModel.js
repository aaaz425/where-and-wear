import { getFullUrl } from './getFullUrl.js';

export class WeatherModel {
  constructor() {
    this.url = getFullUrl();
  }

  async fetchWeatherData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.response.body.items.item;
  }
}
