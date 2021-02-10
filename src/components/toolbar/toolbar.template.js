function toButton(button) {
  const meta = `
    data-type="button"
    data-value='${JSON.stringify(button.value)}'
  `;
  return `
    <div 
      class="button ${button.active ? "active" : ""}"
      ${meta}
    >
      <span 
        class="material-icons"
        ${meta}
      >${button.icon}</span>
    </div>
  `;
}

export function createToolbar(state) {
  const buttons = [
    {
      value: {textAlign: "left"},
      icon: "format_align_left",
      active: state["textAlign"] === "left"
    },
    {
      value: {textAlign: "center"},
      icon: "format_align_justify",
      active: state["textAlign"] === "center"
    },
    {
      value: {textAlign: "right"},
      icon: "format_align_right",
      active: state["textAlign"] === "right"
    },
    {
      value: {fontWeight: state["fontWeight"] === "bold" ? "normal" : "bold"},
      icon: "format_bold",
      active: state["fontWeight"] === "bold"
    },
    {
      value: {
        textDecoration: state["textDecoration"] === "underline"
          ? "none"
          : "underline"
      },
      icon: "format_underlined",
      active: state["textDecoration"] === "underline"
    },
    {
      value: {fontStyle: state["fontStyle"] === "italic" ? "normal" : "italic"},
      icon: "format_italic",
      active: state["fontStyle"] === "italic"
    }
  ];

  return buttons.map(toButton).join("");
}
