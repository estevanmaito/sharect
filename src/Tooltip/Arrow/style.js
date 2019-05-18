const style = ({ arrowSize, backgroundColor, buttonSize, icons }) =>
  'position:absolute;' +
  'border-left:' + arrowSize + 'px solid transparent;' +
  'border-right:' + arrowSize + 'px solid transparent;' +
  'border-top:' + arrowSize + 'px solid ' + backgroundColor + ';' +
  'bottom:-' + (arrowSize - 1) + 'px;' +
  'left:' + ((buttonSize * icons.length) / 2 - arrowSize) + 'px;' +
  'width:0;' +
  'height:0;'

export default style
