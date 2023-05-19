export class ViewComponent {
  constructor(target) {
    this.target = target;
    this.render();
  }

  getTemplate() {
    return '';
  }

  render() {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate());
  }
}
