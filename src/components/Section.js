export default class Section {
  constructor(containerSelector, {renderer}) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  renderItems(initialCards) {
    initialCards.forEach(item => {
      this.addItem(item);
    });
  }

  addItem(item) {
    const card = this._renderer(item);
    this._container.prepend(card);
  }

  addItemPrepend(item) {
    this._container.prepend(item);
  }

  addItemAppend(item) {
    this._container.append(item);
  }

}
