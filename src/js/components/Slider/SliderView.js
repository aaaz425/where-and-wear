export class SliderView {
  constructor(target) {
    this.target = target;
  }

  getTemplate(restaurant, cafe, activity) {
    return `
    <div class="place-recommend">
      <div class="place-restaurant">
        <h5 class="place-recommend_title">음식점</h5>
        <div class="place-recommend_slider">
          <button class="pre-btn"><img src="./src/asset/icon/chevron-left.svg" alt="" /></button>
          <div class="slider-wrap">
            <ul class="recommend-img_slider">
              ${restaurant
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
          </div>
          <button class="next-btn"><img src="./src/asset/icon/chevron-right.svg" alt="" /></button>
        </div>
      </div>
      <div class="place-cafe">
        <h5 class="place-recommend_title">카페</h5>
        <div class="place-recommend_slider">
          <button class="pre-btn"><img src="./src/asset/icon/chevron-left.svg" alt="" /></button>
          <div class="slider-wrap">
            <ul class="recommend-img_slider">
              ${cafe
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
          </div>
          <button class="next-btn"><img src="./src/asset/icon/chevron-right.svg" alt="" /></button>
        </div>
      </div>
      <div class="place-activity">
        <h5 class="place-recommend_title">액티비티</h5>
        <div class="place-recommend_slider">
          <button class="pre-btn"><img src="./src/asset/icon/chevron-left.svg" alt="" /></button>
          <div class="slider-wrap">
            <ul class="recommend-img_slider">
              ${activity
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
          </div>
          <button class="next-btn"><img src="./src/asset/icon/chevron-right.svg" alt="" /></button>
        </div>
      </div>
    </div>`;
  }

  render(restaurant, cafe, activity) {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate(restaurant, cafe, activity));
  }
}
