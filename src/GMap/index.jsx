import React from 'react'
import FaSpinner from 'react-icons/lib/fa/spinner'
import GMapLoader from '../GMapLoader'
import './GMap.css'
import blueBusIcon from './bus_icon_blue.svg'


class GMap extends React.Component {

  static propTypes = {
    toast: React.PropTypes.func.isRequired,
  }

  state = {
    markers: [{
      position: {
        lat: 34.077643,
        lng: -118.330058,
      },
      key: 'Los Angeles',
      animation: 2,
    }],
  }

  handleMapLoad = (map) => {
    this._mapComponent = map
    if (map) {
      console.log(map.getZoom())
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick = (event) => {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        animation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ]
    this.setState({
      markers: nextMarkers,
    })

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
    this.setState({
      markers: nextMarkers,
    })
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
