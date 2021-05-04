;(function (o) {
  const b = 'https://apeagle.io/anywhere/'
  const t = 'fc458224a3d640fdac4e88ca769372f4547de13c8c6942b1982154a9daea0a6f'
  const a = (window.AutopilotAnywhere = {
    _runQueue: [],
    run() {
      this._runQueue.push(arguments)
    },
  })
  const c = encodeURIComponent
  const s = 'SCRIPT'
  const d = document
  const l = d.getElementsByTagName(s)[0]
  let p =
    't=' +
    c(d.title || '') +
    '&u=' +
    c(d.location.href || '') +
    '&r=' +
    c(d.referrer || '')
  const j = 'text/javascript'
  let z
  let y
  if (!window.Autopilot) window.Autopilot = a
  if (o.app) p = 'devmode=true&' + p
  z = function (src, asy) {
    const e = d.createElement(s)
    e.src = src
    e.type = j
    e.async = asy
    l.parentNode.insertBefore(e, l)
  }
  y = function () {
    z(b + t + '?' + p, true)
  }
  if (window.attachEvent) {
    window.attachEvent('onload', y)
  } else {
    window.addEventListener('load', y, false)
  }
})({})
