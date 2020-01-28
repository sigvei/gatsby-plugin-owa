exports.onRouteUpdate = ({ location, prevLocation }) => {
  // Title has not been updated at this point in the callback chain,
  // so this little hack is required
  const sendPageView = () => {
    const { title } = document
    const tracker = window["OWATracker"]
    const event = new window["OWA"].event
    const url = location.href
    const prevUrl = prevLocation && prevLocation.href


    prevUrl && event.set('HTTP_REFERER', prevUrl)
    event.set('page_url', url)
    event.set('page_title', title)
    event.setEventType("base.page_request")

    tracker.trackEvent(event)
  }

  if ('requestAnimationFrame' in window) {
    requestAnimationFrame(() => {
      requestAnimationFrame(sendPageView)
    })
  } else {
    setTimeout(sendPageView, 32)
  }
}
