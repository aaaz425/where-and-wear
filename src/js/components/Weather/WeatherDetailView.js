export class WeatherDetailView {
  constructor(target, data) {
    this.target = target;
    this.data = data;
    this.render();
  }

  getTemplate(weatherObj) {
    return `
      <div class="temperature-wrapper">
        <span class="temperature">${weatherObj.TMP}°C</span>
        <div class="temperature-detail">
          <span class="temperature-max">최고 ${weatherObj.TMX}°C</span>
          <span class="temperature-min">최저 ${weatherObj.TMN}°C</span>
        </div>
      </div>
    `;
  }

  render() {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate(this.data));
  }
}
