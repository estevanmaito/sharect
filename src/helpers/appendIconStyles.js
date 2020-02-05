export function appendIconStyle({ iconColor }) {
  const style = document.createElement('style')
  style.id = 'sharect-style'
  style.innerHTML = `.sharect svg{fill:${iconColor};}`
  document.body.appendChild(style)
}
