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
import { WeatherView } from './components/Weather/WeatherView.js';
import { WeatherImgView } from './components/Weather/WeatherImgView.js';
import { WeatherDetailView } from './components/Weather/WeatherDetailView.js';
import { WeatherModel } from './components/Weather/WeatherModel.js';


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

    this.OutfitMainView = new OutfitMainView($('.outfit-recommend'));
    this.initOutfitView();

    this.WeatherView = new WeatherView($('.outfit-recommend'));
    this.initWeatherView();
  }

  async initOutfitView() {
    const outfitModel = new OutfitModel('outfit', this.WeatherModel);
    const weatherObj = this.WeatherModel.getWeatherObj();

    const outfitZoneView = new OutfitZoneView(
      $('.outfit-background'),
      await outfitModel.getMaleOutfit(),
      outfitModel.calcTmpStep((await weatherObj).TMP)
    );
    const outfitInfoView = new OutfitInfoView(
      $('.outfit-detail'),
      await outfitModel.getMaleOutfit(),
      outfitModel.calcTmpStep((await weatherObj).TMP)
    );

    await outfitZoneView.renderZone(await outfitModel.getMaleOutfit());
    await outfitInfoView.renderInfo(await outfitModel.getMaleOutfit());
  }

  async initWeatherView() {
    // new WeatherImgView($('.weather-detail'), await this.OutfitData.fetchData());
    new WeatherDetailView($('.weather-detail'), await this.WeatherModel.getWeatherObj());
  }
}

new Main();