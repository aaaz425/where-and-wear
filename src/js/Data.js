export class Data {
  constructor() {
    this.url = "http://localhost:3000/";
  }

  async getData(query) {
    const response = await fetch(`${this.url}${query}`);
    const data = await response.json();
    return data;
  }
}
