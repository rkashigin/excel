import {$} from "@core/Dom";

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const type = event.target.dataset.resize;

  $resizer.css({
    opacity: 1,
  });

  let value;

  document.onmousemove = e => {
    if (type === "col") {
      const delta = e.pageX - coords.right;
      value = coords.width + delta;
      $resizer.css({
        right: -delta + "px",
        height: $root.$el.scrollHeight - 2 + "px"
      });
    } else {
      const delta = e.pageY - coords.bottom;
      value = coords.height + delta;
      $resizer.css({
        bottom: -delta + "px",
        width: $root.$el.scrollWidth - 2 + "px"
      });
    }
  };

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;

    $resizer.removeCss([
      'opacity',
      'right',
      'bottom',
      'height',
      'width'
    ]);

    if (type === "col") {
      $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(cell => {
            $(cell).css({
              width: value + 'px'
            });
          });
    } else {
      $parent.css({height: value + "px"});
    }
  };
}
