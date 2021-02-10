export class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw new Error("Method getRoot has to be implemented before use");
  }

  afterRender() {}

  destroy() {}
}
