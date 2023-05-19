export class OutfitInfoView {
  constructor(target, gender, step, index) {
    this.target = target;
    this.gender = gender;
    this.step = step;
    this.index = index;

    this.render();
  }

  getTemplate(gender, step, index) {
    return `
      <div class="jacket">
        <span class="outfit-category">자켓</span>
        <span class="outfit-item">${gender[step].jacket[index[0]].detail}</span>
      </div>
      <div class="top">
        <span class="outfit-category">상의</span>
        <span class="outfit-item">${gender[step].top[index[1]].detail}</span>
      </div>
      <div class="bottom">
        <span class="outfit-category">하의</span>
        <span class="outfit-item">${gender[step].bottom[index[2]].detail}</span>
      </div>
      <div class="shoes">
        <span class="outfit-category">신발</span>
        <span class="outfit-item">${gender[step].shoes[index[3]].detail}</span>
      </div>
      <div class="accessory">
        <span class="outfit-category">액세서리</span>
        <span class="outfit-item">${gender[step].accessory[index[4]].detail}</span>
      </div>
    `;
  }

  async render() {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate(await this.gender, await this.step, this.index));
  }
}
