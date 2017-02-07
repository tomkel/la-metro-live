import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'

// Wrap all 'react-google-maps' components with 'withGoogleMap' HOC
// then wraps it into 'withScriptjs' HOC
// It loads Google Maps JavaScript API v3 for you asynchronously.
const GMapLoader = withScriptjs(
  withGoogleMap(props =>
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={12}
      defaultCenter={{
        lat: 34.077643,
        lng: -118.330058,
      }}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      ))}
    </GoogleMap>,
  ),
)


export default GMapLoader
