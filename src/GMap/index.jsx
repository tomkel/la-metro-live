import React from 'react'
import PropTypes from 'prop-types'
import FaSpinner from 'react-icons/lib/fa/spinner'
import * as R from 'ramda'
import GMapLoader from '../GMapLoader'
import * as metro from '../metro'
import './GMap.css'
import blueBusIcon from './bus_icon_blue.svg'

class GMap extends React.Component {
  static propTypes = {
    toast: PropTypes.func.isRequired,
  }

  state = {
    markers: {}, // key is bus number, value is location objects
    buses: [4, 704], // array of bus numbers
  }

  componentDidMount() {
    this.interval = setInterval(this.updateMap, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  updateMap = () => {
    Promise.all(this.state.buses.map(bus =>
      metro.locations(bus)
        .then(locs => ({ [bus]: locs }))))
      .then(R.mergeAll)
      .then(locs => ({ markers: locs }))
      // .then((a) => { console.log(a); return a; })
      .then(newState => this.setState(newState))
      .catch(console.error)
  }

  handleMapLoad = (map) => {
    this.mapComponent = map
    if (map) {
      console.log(map.getZoom())
    }
  }

  handleMapClick = (event) => {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        animation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ]
    // this.setState({
    //   markers: nextMarkers,
    // })

    if (nextMarkers.length === 3) {
      this.props.toast(
        'Right click on the marker to remove it',
        'Also check the code!',
      )
    }
  }

  handleMarkerRightClick = (targetMarker) => {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker)
    // this.setState({
    //   markers: nextMarkers,
    // })
  }

  render() {
    return (
      <GMapLoader
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChKA9QtMrM0SnTjY6Laccl9mXR2oF1IxM"
        loadingElement={
          <div style={{ height: '100%' }}>
            <FaSpinner
              style={{
                display: 'block',
                width: '80px',
                height: '80px',
                margin: '150px auto',
                animation: 'fa-spin 2s infinite linear',
              }}
            />
          </div>
        }
        containerElement={
          <div style={{ height: '100%' }} />
        }
        mapElement={
          <div style={{ height: '100%' }} />
        }
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
        onMarkerRightClick={this.handleMarkerRightClick}
      />
    )
  }
}

export default GMap
