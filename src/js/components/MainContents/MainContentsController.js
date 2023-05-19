export class MainContentsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  async init() {
    const location = await this.model.getCurrentAddress();
    this.view.render(location);
  }
}
