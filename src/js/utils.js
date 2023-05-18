export const $ = (selector, node = document) => node.querySelector(selector);

export function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export const addFocusClass = node => {
  node.classList.add('focus');
};

export const removeFocusClass = node => {
  node.classList.remove('focus');
};
