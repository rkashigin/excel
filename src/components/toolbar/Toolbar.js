import {ExcelStateComponent} from "@core/ExcelStateComponent";
import {createToolbar} from "@/components/toolbar/toolbar.template";
import {$} from "@core/Dom";

export class Toolbar extends ExcelStateComponent {
  static className = "excel__toolbar";

  constructor($root, options) {
    super($root, {
      name: "Toolbar",
      listeners: ["click"],
      ...options
    });
  }

  prepare() {
    const initialState = {
      textAlign: "left",
      fontWeight: "normal",
      textDecoration: "none",
      fontStyle: "normal"
    };

    this.initState(initialState);
  }

  get template() {
    return createToolbar(this.state);
  }

  toHTML() {
    return this.template;
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === "button") {
      const value = JSON.parse($target.data.value);
      this.setState(value);
    }
  }
}
