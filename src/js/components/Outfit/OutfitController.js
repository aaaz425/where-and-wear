export class OutfitController {
  constructor(model, weather) {
    this.model = model;
    this.weather = weather;
  }

  async getMaleOutfit() {
    const data = await this.model.getOutfit();
    const maleOutfit = data.male;
    return maleOutfit;
  }

  async getFemaleOutfit() {
    const data = await this.model.getOutfit();
    const femaleOutfit = data.female;
    return femaleOutfit;
  }

  async calcTmpStep() {
    const weatherObj = await this.weather.getWeatherObj();
    const tmp = +weatherObj.TMP;

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

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  async getIndexArr() {
    const randomIndexArr = [];
    const gender = await this.getMaleOutfit();
    const recommendOutfit = await this.calcTmpStep();

    if (recommendOutfit === undefined) {
      return;
    }

    const outfitByStep = gender[recommendOutfit];

    randomIndexArr.push(this.getRandomIndex(outfitByStep.jacket));
    randomIndexArr.push(this.getRandomIndex(outfitByStep.top));
    randomIndexArr.push(this.getRandomIndex(outfitByStep.bottom));
    randomIndexArr.push(this.getRandomIndex(outfitByStep.shoes));
    randomIndexArr.push(this.getRandomIndex(outfitByStep.accessory));

    return randomIndexArr;
  }
}
