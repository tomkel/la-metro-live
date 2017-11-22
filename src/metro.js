import * as R from 'ramda'
import xml2js from 'xml2js'

function resVerify(res) {
  if (!res.ok) {
    console.error('API error', res.status, res.statusText)
    return Promise.reject(res.statusText)
  }

  return res.text()
}

function parseXML(xml) {
  return new Promise((resolve, reject) =>
    xml2js.parseString(xml, (err, result) => {
      if (err) {
        console.error('parser error', err)
        reject(err)
        return
      }
      resolve(result)
    }),
  )
}

function extractBuses(doc) {
  return doc.body.vehicle.map(el => el.$)
}

// probably dont need this. bus is probably sitting still somewhere
const fillInRouteTag = R.curry((route, buses) =>
  buses.map((bus) => {
    if (!('routeTag' in bus)) {
      bus.routeTag = route
    }
    return bus
  }))

const filterBusesWithMissingRoute =
    R.filter(R.has('routeTag'))

function locations(route = '') {
  const url = `http://webservices.nextbus.com/service/publicXMLFeed?command=vehicleLocations&a=lametro&t=0&r=${route}`
  return fetch(url)
    .then(resVerify)
    .then(parseXML)
    .then(extractBuses)
    .then(filterBusesWithMissingRoute)
//    .then(fillInRouteTag(route))
}


export { locations }
