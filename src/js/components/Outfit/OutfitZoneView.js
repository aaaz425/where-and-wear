import { ViewComponent } from '../../core/ViewComponent.js';

export class OutfitZoneView extends ViewComponent {
  constructor(target, model, step) {
    super(target);
    this.model = model;
    this.step = step;
    this.index = [0, 0, 1, 0, 1];
  }

  getZoneTemplate(data, step, index) {
    return `
      <img class="jacket" src="${data[step].jacket[index[0]].img}" />
      <img class="top" src="${data[step].top[index[1]].img}" />
      <img class="bottom" src="${data[step].bottom[index[2]].img}" />
      <img class="shoes" src="${data[step].shoes[index[3]].img}" />
      <img class="accessory" src="${data[step].accessory[index[4]].img}" />
    `;
  }

  async renderZone(model) {
    this.target.insertAdjacentHTML('beforeend', await this.getZoneTemplate(model, this.step, this.index));
  }
}
