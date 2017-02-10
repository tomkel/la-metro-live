import React from 'react'
import { Marker } from 'react-google-maps'

class AniMarker extends React.Component {

  static propTypes = {
    position: React.PropTypes.shape({
      lat: React.PropTypes.number,
      lng: React.PropTypes.number,
    }).isRequired,
    getMarkerLayer: React.PropTypes.func.isRequired,
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
        {...this.props}
      />
    )
  }


}


export default AniMarker
