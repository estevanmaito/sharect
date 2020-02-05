import style from './style'

export default function Arrow(props) {
  const arrow = document.createElement('div')
  arrow.style.cssText = style(props)

  return arrow
}
