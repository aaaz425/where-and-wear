import { ViewComponent } from './core/ViewComponent.js';

export class App extends ViewComponent {
  getTemplate() {
    return `
      <header class="header"></header>
      <main id="main" class="main"></main>`;
  }
}
