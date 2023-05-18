import { $ } from './utils.js';
import { App } from './app.js';
import { HeaderView } from './components/Header/HeaderView.js';
import { SliderModel } from './components/Slider/SliderModel.js';
import { SliderView } from './components/Slider/SliderView.js';
import { SliderController } from './components/Slider/SliderController.js';
import { MainContentsView } from './components/MainContents/MainContentsView.js';

class Main {
  constructor() {
    this.App = new App($('body'));
    this.HeaderView = new HeaderView($('.header'));
    this.MainContentsView = new MainContentsView($('.main'));
    this.SliderModel = new SliderModel('dateSpot');
    this.SliderView = new SliderView($('.place-recommend'));
    this.SliderController = new SliderController(this.SliderModel, this.SliderView);
  }
}

new Main();
