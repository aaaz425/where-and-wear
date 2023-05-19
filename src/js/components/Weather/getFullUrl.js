import { WEATHER } from '../../constant.js';

export function getFullUrl() {
  return `${WEATHER.URL}serviceKey=${
    WEATHER.APIKEY
  }&numOfRows=290&pageNo=1&base_date=${getToday()}&base_time=${getCurrentTime()}&nx=60&ny=127&dataType=JSON`;
}

function getToday() {
  const newToday = new Date();
  const todayYear = newToday.getFullYear();
  const todayMonth = newToday.getMonth();
  let todayDate = newToday.getDate();
  const isAfterOctober = todayMonth >= 9;

  if (getTime() <= 2 && todayDate !== 1) {
    todayDate -= 1;
  }

  if (isAfterOctober) {
    const today = `${todayYear}${todayMonth + 1}${todayDate}`;
    return today;
  } else {
    const today = `${todayYear}0${todayMonth + 1}${todayDate}`;
    return today;
  }
}

function getTime() {
  const now = new Date();
  const time = parseInt(now.toLocaleTimeString('it-IT'));
  return time;
}

function getCurrentTime() {
  const time = getTime();

  switch (true) {
    case time <= 2:
      return '2300';

    case time > 2 && time <= 5:
      return '0200';

    case time > 5 && time <= 8:
      return '0500';

    case time > 8 && time <= 11:
      return '0800';

    case time > 11 && time <= 14:
      return '1100';

    case time > 14 && time <= 17:
      return '1400';

    case time > 17 && time <= 20:
      return '1700';

    case time > 20 && time <= 23:
      return '2000';
  }
}
