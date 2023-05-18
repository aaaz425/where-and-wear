import { ViewComponent } from '../../core/ViewComponent.js';

export class MainContentsView extends ViewComponent {
  getTemplate() {
    return `
        <section class="main-place">
            <div class="place-title">
                <h3 class="place-title_head">주변 추천 플레이스</h3>
                <div class="place-title_location">
                    <img src="./src/asset/icon/location.svg" alt="" />
                    <span>용산구</span>
                </div>
            </div>
            <div class="place-recommend">
                <div class="place-restaurant">
                    <h5 class="place-recommend_title">음식점</h5>
                </div>
                <div class="place-cafe">
                    <h5 class="place-recommend_title">카페</h5>
                </div>
                <div class="place-activity">
                    <h5 class="place-recommend_title">액티비티</h5>
                </div>
            </div>
        </section>`;
  }
}
