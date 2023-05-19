import { $ } from './utils.js';
import { App } from './App.js';
import { HeaderView } from './components/Header/HeaderView.js';
import { SliderModel } from './components/Slider/SliderModel.js';
import { SliderView } from './components/Slider/SliderView.js';
import { SliderController } from './components/Slider/SliderController.js';
import { MainContentsView } from './components/MainContents/MainContentsView.js';
import { MainContentsModel } from './components/MainContents/MainContentsModel.js';
import { MainContentsController } from './components/MainContents/MainContentsController.js';

class Main {
  constructor() {
    this.App = new App($('body'));
    this.HeaderView = new HeaderView($('.header'));
    this.MainContentsView = new MainContentsView($('.main-place'));
    this.MainContentsModel = new MainContentsModel();
    this.MainContentsController = new MainContentsController(this.MainContentsModel, this.MainContentsView);
    this.SliderModel = new SliderModel('dateSpot');
    this.SliderView = new SliderView($('.main-place'));
    this.SliderController = new SliderController(this.SliderModel, this.SliderView);
  }
}

new Main();
