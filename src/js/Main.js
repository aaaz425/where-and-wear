import { $ } from './utils.js';
import { App } from './App.js';
import { HeaderView } from './components/Header/HeaderView.js';
import { SliderModel } from './components/Slider/SliderModel.js';
import { SliderView } from './components/Slider/SliderView.js';
import { SliderController } from './components/Slider/SliderController.js';
import { MainContentsView } from './components/MainContents/MainContentsView.js';
import { MainContentsModel } from './components/MainContents/MainContentsModel.js';
import { MainContentsController } from './components/MainContents/MainContentsController.js';
import { ModelComponent } from './core/ModelComponent.js';
import { OutfitMainView } from './components/Outfit/OutfitMainView.js';
import { OutfitZoneView } from './components/Outfit/OutfitZoneView.js';
import { OutfitInfoView } from './components/Outfit/OutfitInfoView.js';
import { OutfitModel } from './components/Outfit/OutfitModel.js';
import { OutfitController } from './components/Outfit/OutfitController.js';
import { WeatherMainView } from './components/Weather/WeatherMainView.js';
import { WeatherImgView } from './components/Weather/WeatherImgView.js';
import { WeatherDetailView } from './components/Weather/WeatherDetailView.js';
import { WeatherModel } from './components/Weather/WeatherModel.js';
import { WeatherController } from './components/Weather/WeatherController.js';


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

    this.WeatherModel = new WeatherModel();
    this.OutfitModel = new OutfitModel('outfit');

    this.OutfitMainView = new OutfitMainView($('.outfit-recommend'));

    this.WeatherView = new WeatherMainView($('.outfit-recommend'));
    this.WeatherController = new WeatherController(this.WeatherModel, this.WeatherView);
    this.OutfitController = new OutfitController(this.OutfitModel, this.WeatherController);

    this.initOutfitView();
    this.initWeatherView();
  }

  async initOutfitView() {
    const indexArr = await this.OutfitController.getIndexArr();

    new OutfitZoneView(
      $('.outfit-background'),
      await this.OutfitController.getMaleOutfit(),
      this.OutfitController.calcTmpStep(),
      indexArr
    );
    new OutfitInfoView(
      $('.outfit-detail'),
      await this.OutfitController.getMaleOutfit(),
      this.OutfitController.calcTmpStep(),
      indexArr
    );
  }

  async initWeatherView() {
    new WeatherImgView($('.weather-detail'), await this.WeatherController.getImgName());
    new WeatherDetailView($('.weather-detail'), await this.WeatherController.getWeatherObj());
  }
}

new Main();