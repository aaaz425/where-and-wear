export class SliderController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    const data = await this.model.fetchData();
  }
}
