import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-google-maps'
import busSymbol from './busSymbol'

class AniMarker extends React.Component {

  static propTypes = {
    position: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }).isRequired,
    getMarkerLayer: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('mounted')
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.position.lat !== this.props.position.lat ||
      nextProps.position.lng !== this.props.position.lng
  }

  componentWillUpdate() {
    this.props.getMarkerLayer().classList.add('anim')
  }

  componentDidUpdate() {
    console.log('update')
    setTimeout(() => this.props.getMarkerLayer().classList.remove('anim'), 2100)
  }

  animation = {
    BIG_DROP: 2,
    SMALL_DROP: 4,
  }

  render() {
    return (
      <Marker
        options={{ optimized: false }}
        animation={this.animation.SMALL_DROP}
        title={this.props.id}
        icon={busSymbol({ rotation: Number(this.props.heading), color: 'red' })}
        {...this.props}
      />
    )
  }


}


export default AniMarker
