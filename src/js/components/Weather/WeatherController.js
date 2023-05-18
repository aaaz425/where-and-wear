export class WeatherController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async getWeatherObj() {
    const weatherArr = await this.model.fetchWeatherData();
    const weatherObj = {
      TMX: 0, //최고기온
      TMN: 0, //최저기온
      TMP: 0, //현재기온
      SKY: 0, //하늘상태
      POP: 0, //강수확률
      PTY: 0, //강수형태
    };

    for (const list of await weatherArr) {
      switch (list.category) {
        case 'TMX':
          const temp1 = [];
          temp1.push(list.fcstValue);
          weatherObj.TMX = temp1[0];
          break;

        case 'TMN':
          const temp2 = [];
          temp2.push(list.fcstValue);
          weatherObj.TMN = temp2[0];
          break;

        case 'TMP':
          const temp3 = [];
          temp3.push(list.fcstValue);
          weatherObj.TMP = temp3[0];
          break;

        case 'SKY':
          const temp4 = [];
          temp4.push(list.fcstValue);
          weatherObj.SKY = temp4[0];
          break;

        case 'POP':
          const temp5 = [];
          temp5.push(list.fcstValue);
          weatherObj.POP = temp5[0];
          break;

        case 'PTY':
          const temp6 = [];
          temp6.push(list.fcstValue);
          weatherObj.PTY = temp6[0];
          break;
      }
    }
    return weatherObj;
  }

  async getImgName() {
    const weatherObj = await this.getWeatherObj();
    const skyForm = +weatherObj.SKY;
    const rainyForm = +weatherObj.PTY;

    if (rainyForm === 0) {
      switch (skyForm) {
        case 1:
          return 'sunny';
        case 3:
          return 'cloud';
        case 4:
          return 'blur';
      }
    }

    switch (rainyForm) {
      case 1:
        return 'rainy';
      case 2:
        return 'rainy-snow';
      case 3:
        return 'snow';
      case 4:
        return 'shower';
    }
  }
}
