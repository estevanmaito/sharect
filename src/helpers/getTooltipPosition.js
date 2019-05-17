export function getDistanceFromTop() {
  return (
    window.pageXOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  );
}

export default function getTooltipPosition(props) {
  const { iconSize, buttonMargin, arrowSize, icons } = props;

  const sel = window
    .getSelection()
    .getRangeAt(0)
    .getBoundingClientRect();

  const buttonSize = iconSize + buttonMargin;

  const distanceFromTop = getDistanceFromTop();

  const top = sel.top + distanceFromTop - buttonSize - arrowSize;
  const left = sel.left + (sel.width - buttonSize * icons.length) / 2;

  return { top, left };
}
