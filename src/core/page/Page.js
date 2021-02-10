export class Page {
  constructor(params) {
    this.params = params || Date.now().toString();
  }

  getRoot() {
    throw new Error("Method getRoot has to be implemented before use");
  }

  afterRender() {}

  destroy() {}
}
