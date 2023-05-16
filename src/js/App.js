import { Component } from "./core/Component.js";

export class App extends Component {
  getTemplate() {
    return `
      <header class="header"></header>
      <main id="main" class="main"></main>`;
  }
}
