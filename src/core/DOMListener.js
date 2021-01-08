export class DOMListener {
  constructor($root) {
    if (!$root) {
      throw new Error("Root element has not been provided for DOMListener");
    }
    this.$root = $root;
  }
}
