export const defaultStyle = backgroundColor =>
  "line-height:0;" +
  "transition:all .2s ease-in-out;" +
  "background:" + backgroundColor + ";"

export const mobileStyle = buttonSize =>
  "position:fixed;" +
  "bottom:calc(50% - 64px);" +
  "left:0;" +
  "width:" + buttonSize + "px;" +
  "border-top-right-radius:5px;" +
  "border-bottom-right-radius:5px;"

export const desktopStyle = (top, left) =>
  "position:absolute;" +
  "border-radius:3px;" +
  "top:" + top + "px;" +
  "left:" + left + "px;"
