export class SliderModel {
  constructor(url) {
    this.url = `http://localhost:3000/${url}`;
  }

  async fetchData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}
