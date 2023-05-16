import { $ } from "./utils.js";
import { Data } from "./Data.js";
import { App } from "./app.js";

class Main {
  constructor() {
    this.data = new Data();
    this.App = new App($("body"));
  }
}

new Main();
