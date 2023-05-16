export const $ = (selector, node = document) => node.querySelector(selector);

export function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
