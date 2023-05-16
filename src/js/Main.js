import { $ } from './utils.js';
import { App } from './app.js';

class Main {
  constructor() {
    this.App = new App($('body'));
  }
}

new Main();
