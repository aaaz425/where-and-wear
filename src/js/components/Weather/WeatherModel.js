import { getFullUrl } from './getFullUrl.js';

export class WeatherModel {
  constructor() {
    this.url = getFullUrl();
  }

  async fetchWeatherData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.response.body.items.item;
  }

  async getWeatherObj() {
    const weatherArr = await this.fetchWeatherData();
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
}
