export class SliderView {
  constructor(target) {
    this.target = target;
  }

  getTemplate(lists) {
    return `
      <div class="place-recommend_slider">
        <button class="pre-btn"><img src="./src/asset/icon/chevron-left.svg" alt="" /></button>
        <ul class="recommend-img_slider">
          ${lists
            .map(
              list => `
              <li class="place-list">
                <img class="place-list_img" src="${list.img}" alt="" />
                <span class="place-list_title">${list.name}</span>
                <span class="place-list_info">${list.info}</span>
                <span class="place-list_address">${list.address}</span>
              </li>`
            )
            .join('')}
        </ul>
        <button class="next-btn"><img src="./src/asset/icon/chevron-right.svg" alt="" /></button>
      </div>`;
  }

  render(data) {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate(data));
  }
}
