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

    for (const list of weatherArr) {
      switch (list.category) {
        case 'TMX':
          if (list.fcstValue) {
            weatherObj.TMX = list.fcstValue;
          }
          break;

        case 'TMN':
          if (list.fcstValue) {
            weatherObj.TMN = list.fcstValue;
          }
          break;

        case 'TMP':
          if (list.fcstValue) {
            weatherObj.TMP = list.fcstValue;
          }
          break;

        case 'SKY':
          if (list.fcstValue) {
            weatherObj.SKY = list.fcstValue;
          }
          break;

        case 'POP':
          if (list.fcstValue) {
            weatherObj.POP = list.fcstValue;
          }
          break;

        case 'PTY':
          if (list.fcstValue) {
            weatherObj.PTY = list.fcstValue;
          }
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
