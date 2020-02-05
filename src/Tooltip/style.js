export const defaultStyle = backgroundColor =>
  'line-height:0;' +
  'transition:all .2s ease-in-out;' +
  'background:' + backgroundColor + ';'

export const desktopStyle = (top, left) =>
  'position:absolute;' +
  'border-radius:3px;' +
  'top:' + top + 'px;' +
  'left:' + left + 'px;'
