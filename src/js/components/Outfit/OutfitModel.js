import { ModelComponent } from '../../core/ModelComponent.js';

export class OutfitModel extends ModelComponent {
  constructor(url) {
    super(url);
  }

  async getOutfit() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}
