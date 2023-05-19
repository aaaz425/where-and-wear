export class WeatherImgView {
  constructor(target, data) {
    this.target = target;
    this.data = data;
    this.render();
  }

  getTemplate(imgName) {
    return `
      <img class="weather-img" src="./src/asset/weather/${imgName}.svg" />
    `;
  }

  render() {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate(this.data));
  }
}
