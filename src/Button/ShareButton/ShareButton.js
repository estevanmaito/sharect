import Button from "../Button";

export default function createShareButton(icon, url, username) {
  const btn = Button(icon, function() {
    const parsedURL = url
      .replace(/PAGE_URL/, window.location.href)
      .replace(/TEXT_SELECTION/, window.getSelection().toString())
      .replace(/USERNAME/, username)
    window.open(parsedURL, 'Share', 'width=550, height=280')
  })
  return btn
}