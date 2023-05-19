import { $ } from '../../utils.js';
import { ViewComponent } from '../../core/ViewComponent.js';

export class HeaderView extends ViewComponent {
  getTemplate() {
    return `
        <header class="header">
            <div class="nav">
                <a class="nav-BI" href="./index.html"><img src="./src/asset/etc/BI.png" alt="" /></a>
                <form class="nav-searchBar">
                    <input class="nav-searchBar_input" type="text" placeholder="서울특별시 용산구" />
                    <button class="nav-searchBar_btn"><img src="./src/asset/icon/search.svg" alt="" /></button>
                </form>
                <div class="nav-pages">
                    <a class="nav-pages_link" href="#">주제별</a>
                    <a class="nav-pages_link" href="#">이벤트</a>
                    <a class="nav-pages_link" href="#">로그인</a>
                </div>
            </div>
        </header>`;
  }
}
