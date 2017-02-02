import _ from 'lodash'
import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'

// Wrap all 'react-google-maps' components with 'withGoogleMap' HOC
// then wraps it into 'withScriptjs' HOC
// It loads Google Maps JavaScript API v3 for you asynchronously.
/*const GMapLoader = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        onClick={props.onMapClick}
      >
        {props.markers.map(marker => (
          <Marker
            {...marker}
            onRightClick={() => props.onMarkerRightClick(marker)}
          />
        ))}
      </GoogleMap>
    ),
  ),
)
*/
const GMapLoader = _.flowRight(
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
))


export default GMapLoader
