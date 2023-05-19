export class MainContentsView {
  constructor(target) {
    this.target = target;
  }

  getTemplate(location) {
    return `
          <div class="place-title">
            <h3 class="place-title_head">주변 추천 플레이스</h3>
            <div class="place-title_location">
              <img src="./src/asset/icon/location.svg" alt="" />
              <span>${location}</span>
            </div>
          </div>`;
  }

  render(data) {
    this.target.insertAdjacentHTML('beforeend', this.getTemplate(data));
  }
}
