import 'babel-polyfill'
import './index.css'
import blueBusIcon from './bus_icon_blue.svg'

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
global.initMap = function initMap() {
  console.log('initMap')
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
  })

  const beachMarker = new google.maps.Marker({
    position: { lat: -33.890, lng: 151.274 },
    map,
    icon: blueBusIcon,
  })
}
