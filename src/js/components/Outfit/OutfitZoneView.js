export class OutfitZoneView {
  constructor(target, gender, step, index) {
    this.target = target;
    this.gender = gender;
    this.step = step;
    this.index = index;

    this.render();
  }

  getTemplate(gender, step, index) {
    return `
      <img class="jacket" src="${gender[step].jacket[index[0]].img}" />
      <img class="top" src="${gender[step].top[index[1]].img}" />
      <img class="bottom" src="${gender[step].bottom[index[2]].img}" />
      <img class="shoes" src="${gender[step].shoes[index[3]].img}" />
      <img class="accessory" src="${gender[step].accessory[index[4]].img}" />
    `;
  }

  async render() {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate(await this.gender, await this.step, this.index));
  }
}
