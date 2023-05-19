export const $ = (selector, node = document) => node.querySelector(selector);

export function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export function setCurrentPosition(location) {
  const positions = {
    용산구: 'yongsan',
    강남구: 'gangnam',
    강서구: 'gangseo',
    관악구: 'gwanak',
    금천구: 'geumcheon',
    구로구: 'guro',
    노원구: 'nowon',
    동작구: 'dongjak',
    도봉구: 'dobong',
    동대문구: 'dongdaemun',
    송파구: 'songpa',
    성동구: 'seongdong',
    서대문구: 'seodaemun',
    서초구: 'seocho',
    성북구: 'seongbuk',
    강동구: 'gangdong',
    강북구: 'gangbuk',
    영등포구: 'yeongdeungpo',
    양천구: 'yangcheon',
    은평구: 'eunpyeong',
    마포구: 'mapo',
    중구: 'jung',
    중랑구: 'jungnang',
  };

  if (location in positions) {
    return positions[location];
  } else {
    return 'yongsan';
  }
}

export function getCurrentCoordinate() {
  const defaultCoordinate = { lat: 37.5323264, lng: 126.9907031 };
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      return { lat: position.coords.latitude, lng: position.coords.longitude };
    });
  }

  return defaultCoordinate;
}

export const addFocusClass = node => {
  node.classList.add('focus');
};

export const removeFocusClass = node => {
  node.classList.remove('focus');
};
