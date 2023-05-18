import { ModelComponent } from '../../core/ModelComponent.js';

export class OutfitModel extends ModelComponent {
  constructor(url, weather) {
    super(url);
    this.weather = weather;
  }

  calcTmpStep(tmp) {
    switch (true) {
      case tmp <= 0:
        return 'step1';
      case tmp > 0 && tmp <= 8:
        return 'step2';
      case tmp > 8 && tmp <= 15:
        return 'step3';
      case tmp > 15 && tmp <= 25:
        return 'step4';
      case tmp > 25:
        return 'step5';
    }
  }

  async getMaleOutfit() {
    const data = await this.fetchData();
    const maleOutfit = data.male;
    return maleOutfit;
  }

  async getFemaleOutfit() {
    const data = await this.fetchData();
    const femaleOutfit = data.female;
    return femaleOutfit;
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
}
