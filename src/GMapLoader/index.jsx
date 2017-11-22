import React from 'react'
import PropTypes from 'prop-types'
import { withGoogleMap, GoogleMap, OverlayView, withScriptjs } from 'react-google-maps'
import * as R from 'ramda'
import AniMarker from '../AniMarker'

const flattenMarkers = markers => R.flatten(R.values(markers))

class GMapLoader extends React.Component {

  static propTypes = {
    markers: PropTypes.array.isRequired,
  }

  setMarkerLayer = (ref) => {
    const panes = ref.getPanes()
    if (!panes) {
      setTimeout(() => this.setMarkerLayer(ref), 500)
      return
    }
    panes.markerLayer.id = 'markerLayer'
    this.markerLayer = panes.markerLayer
  }

  getMarkerLayer = () => this.markerLayer

  render() {
    return (
      <GoogleMap
        ref={this.props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{
          lat: 34.077643,
          lng: -118.330058,
        }}
        onClick={this.props.onMapClick}
      >
        <OverlayView
          mapPaneName={OverlayView.OVERLAY_LAYER}
          position={{ lat: 34.077643, lng: -118.330058 }}
          ref={this.setMarkerLayer}
        >
          <div />
        </OverlayView>

        {flattenMarkers(this.props.markers).map(marker => (
          <AniMarker
            {...marker}
            key={marker.id}
            getMarkerLayer={this.getMarkerLayer}
            onRightClick={() => this.props.onMarkerRightClick(marker)}
            onPositionChanged={() => console.log(marker.id, 'position changed')}
          />
        ))}
      </GoogleMap>
    )
  }
}


// Wrap all 'react-google-maps' components with 'withGoogleMap' HOC
// then wraps it into 'withScriptjs' HOC
// It loads Google Maps JavaScript API v3 for you asynchronously.
export default withScriptjs(withGoogleMap(GMapLoader))
