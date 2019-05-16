import style from "./style";

function handleMouseOver() {
  this.style.transform = "scale(1.2)";
}

function handleMouseOut() {
  this.style.transform = "scale(1)";
}

export default function createButton(icon, handleMouseDown) {
  const btn = document.createElement("div");
  btn.style.cssText = style;
  btn.innerHTML = icon;
  btn.onmousedown = handleMouseDown;
  btn.onmouseover = handleMouseOver;
  btn.onmouseout = handleMouseOut;

  return btn;
}
