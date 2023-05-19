import { getCurrentCoordinate } from '../../utils.js';

export class SliderModel {
  constructor(url) {
    this.url = `http://localhost:3000/${url}`;
  }

  async fetchData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  getCurrentAddress() {
    return new Promise((resolve, reject) => {
      const myLatLng = getCurrentCoordinate();
      const geocoder = new google.maps.Geocoder();

      geocoder.geocode({ location: myLatLng }, function (results, status) {
        if (status === 'OK') {
          if (results[0]) {
            resolve(results[0].address_components[2].long_name);
          } else {
            reject('주소를 찾을 수 없습니다.');
          }
        } else {
          reject('용산구');
        }
      });
    });
  }
}
