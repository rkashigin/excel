import {ExcelComponent} from "@core/ExcelComponent";
import {$} from "@core/Dom";
import {changeTitle} from "@/redux/actions";
import {defaultTitle} from "@/constants";

export class Header extends ExcelComponent {
  static className = "excel__header";

  constructor($root, options) {
    super($root, {
      name: "Header",
      listeners: ["input"],
      ...options
    });
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle;
    return `
      <input type="text" class="input" value="${title}"/>

      <div>

        <div class="button">
          <span class="material-icons">
            delete
          </span>
        </div>

        <div class="button">
          <span class="material-icons">
            exit_to_app
          </span>
        </div>

      </div>
    `;
  }

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }
}
