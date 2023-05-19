import { ViewComponent } from '../../core/ViewComponent.js';
import { $, addFocusClass, removeFocusClass } from '../../utils.js';

export class OutfitMainView extends ViewComponent {
  constructor(target) {
    super(target);
    this.setEvent();
  }
  getTemplate() {
    return `
      <div class="outfit-recommendation">
        <div class="outfit-zone">
          <span class="outfit-header">오늘의 추천 의상</span>
          <div class="outfit-background"></div>
        </div>
        <div class="outfit-info">
          <div class="outfit-btn_wrapper">
            <button class="male focus" type="button">남</button>
            <button class="female" type="button">여</button>
          </div>
          <div class="outfit-detail"></div>
        </div>
      </div>
    `;
  }

  setEvent() {
    $('.outfit-btn_wrapper').addEventListener('click', e => {
      const isMale = e.target.classList.contains('male');

      if (isMale) {
        addFocusClass($('.male'));
        removeFocusClass($('.female'));
      } else {
        addFocusClass($('.female'));
        removeFocusClass($('.male'));
      }
    });
  }
}
