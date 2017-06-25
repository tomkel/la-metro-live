import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-google-maps'
import busSymbol from './busSymbol'

class AniMarker extends React.Component {

  static propTypes = {
    getMarkerLayer: PropTypes.func.isRequired,
  }

  componentDidMount() {
    console.log('mounted')
  }

  shouldComponentUpdate(nextProps) {
    const diff = this.diffProps(nextProps)
    return diff('lat') || diff('lon') || diff('secsSinceReport')
  }

  componentWillUpdate(nextProps) {
    const diff = this.diffProps(nextProps)
    if (diff('lat') || diff('lon')) {
      this.props.getMarkerLayer().classList.add('anim')
    }
  }

  componentDidUpdate(prevProps) {
    const diff = this.diffProps(prevProps)
    if (diff('lat') || diff('lon')) {
      console.log('update')
      setTimeout(() => this.props.getMarkerLayer().classList.remove('anim'), 2100)
    }
  }

  diffProps(nextProps) {
    return name => nextProps[name] !== this.props[name]
  }

  animation = {
    BIG_DROP: 2,
    SMALL_DROP: 4,
  }

  render() {
    return (
      <Marker
        position={{ lat: Number(this.props.lat), lng: Number(this.props.lon) }}
        title={this.props.secsSinceReport}
        options={{ optimized: false }}
        animation={this.animation.SMALL_DROP}
        icon={busSymbol({ rotation: Number(this.props.heading), color: 'red' })}
        {...this.props}
      />
    )
  }


}


export default AniMarker
