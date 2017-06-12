import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Map, { GoogleApiWrapper } from 'google-maps-react'

import IVText from './IVText'

@GoogleApiWrapper({
  apiKey: 'AIzaSyDniVit-27IAdrb6s8JDMlHWFRWdFsUwnc'
})
class IVLocationPicker extends Component {

  componentDidMount() {

    if (this.props.google) this.loadMap()

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords
        this.props.onValue({ latitude: latitude, longitude: longitude })
        this.map.panTo({ lat: latitude, lng: longitude })
      })
    }

  }

  render() {

    return (
      <div ref='map' style={{
        height: 440,
        width: 600,
        margin: 20,
      }}>
        <Map google={this.props.google}/>
      </div>
    )

  }

  componentDidUpdate(previousProps, previousState) {

    if (
      previousProps.google !== this.props.google &&
      this.props.google
    ) this.loadMap();

    if (this.props.google && previousProps.value !== this.props.value) {
      const { latitude, longitude } = this.props.value
      const latLng = {
        lat: latitude,
        lng: longitude
      }
      this.marker.setPosition(latLng)
    }

  }

  loadMap() {

    const { google, value } = this.props

    const latLng = new google.maps.LatLng(value.latitude, value.longitude)

    const mapConfig = { center: latLng, zoom: 13 }
    const mapNode = ReactDOM.findDOMNode(this.refs.map)

    this.map = new google.maps.Map(mapNode, mapConfig)
    this.marker = new google.maps.Marker({ map: this.map, position: latLng })

    this.map.addListener('click', e => {
      const jsonLatLng = e.latLng.toJSON()
      this.props.onValue({
        latitude: jsonLatLng.lat,
        longitude: jsonLatLng.lng
      })
    })

  }

}

export default IVLocationPicker
