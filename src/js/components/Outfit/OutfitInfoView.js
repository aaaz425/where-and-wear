import { OutfitZoneView } from './OutfitZoneView.js';
import { $, addFocusClass, removeFocusClass } from '../../utils.js';

export class OutfitInfoView extends OutfitZoneView {
  constructor(target, model, step) {
    super(target);
    this.model = model;
    this.step = step;
    this.index = [0, 0, 1, 0, 1];

    this.setEvent();
  }

  getInfoTemplate(data, step, index) {
    return `
      <div class="jacket">
        <span class="outfit-category">자켓</span>
        <span class="outfit-item">${data[step].jacket[index[0]].detail}</span>
      </div>
      <div class="top">
        <span class="outfit-category">상의</span>
        <span class="outfit-item">${data[step].top[index[1]].detail}</span>
      </div>
      <div class="bottom">
        <span class="outfit-category">하의</span>
        <span class="outfit-item">${data[step].bottom[index[2]].detail}</span>
      </div>
      <div class="shoes">
        <span class="outfit-category">신발</span>
        <span class="outfit-item">${data[step].shoes[index[3]].detail}</span>
      </div>
      <div class="accessory">
        <span class="outfit-category">액세서리</span>
        <span class="outfit-item">${data[step].accessory[index[4]].detail}</span>
      </div>
    `;
  }

  async renderInfo(model) {
    this.target.insertAdjacentHTML('beforeend', await this.getInfoTemplate(model, this.step, this.index));
  }

  setEvent() {
    this.target.parentNode.addEventListener('click', async e => {
      if (e.target.classList.contains('male')) {
        addFocusClass($('.male'));
        removeFocusClass($('.female'));
        this.getZoneTemplate(await this.model.getMaleOutfit(), this.step, this.index);
        this.getInfoTemplate(await this.model.getMaleOutfit(), this.step, this.index);
        this.renderZone(this.model);
        this.renderInfo(this.model);
      } else if (e.target.classList.contains('female')) {
        addFocusClass($('.female'));
        removeFocusClass($('.male'));
        this.getZoneTemplate(await this.model.getFemaleOutfit(), this.step, this.index);
        this.getInfoTemplate(await this.model.getFemaleOutfit(), this.step, this.index);
        this.renderZone(this.model);
        this.renderInfo(this.model);
      }
    });
  }
}
