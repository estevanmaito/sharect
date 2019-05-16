export function appendIconStyle({iconColor}) {
  const style = document.createElement("style");
  style.id = "sharect-style";
  style.innerHTML = `.sharect svg{fill:${iconColor};}`;
  document.body.appendChild(style);
}

export function appendMobileIconStyle(iconColor, mobileIconSize) {
  const style = document.getElementById("sharect-style");
  style.innerHTML = `.sharect svg{fill:${iconColor};width:${mobileIconSize}px;height:${mobileIconSize}px;}`;
}
