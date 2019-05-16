import hasTooltipDrawn from "./hasTooltipDrawn";
import hasSelection from "./hasSelection";
import isSelectableElement from "./isSelectableElement";
import moveTooltip from "./moveTooltip";
import renderTooltip from "./renderTooltip";
import { appendMobileIconStyle } from "./appendIconStyles";

let isMobile = false;

function handleMouseUp(props) {
  setTimeout(function mouseTimeout() {
    if (hasTooltipDrawn()) {
      if (hasSelection() && isSelectableElement(props.selectableElements)) {
        moveTooltip({ ...props, isMobile });
        return;
      } else {
        document.querySelector(".sharect").remove();
      }
    }
    if (hasSelection() && isSelectableElement(props.selectableElements)) {
      renderTooltip({ ...props, isMobile });
    }
  }, 10);
}

function handlePointerUp(e, { iconColor, mobileIconSize }) {
  if (e.pointerType !== "mouse" && e.isPrimary) {
    isMobile = true;
    appendMobileIconStyle(iconColor, mobileIconSize);
    window.removeEventListener("pointerup", handlePointerUp);
  }
}

export default function attachEvents(props) {
  window.addEventListener("mouseup", () => handleMouseUp(props), false);

  if (window.onpointerup !== undefined) {
    window.addEventListener("pointerup", (e) => handlePointerUp(e, props), false);
  } else if (window.orientation !== undefined) {
    isMobile = true;
    appendMobileIconStyle(props);
  }
}
