import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '15%',
  height: '35%'
};

/*

TUTORIAL: 
https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications#step-3-%E2%80%94-using-markers-and-infowindow

*/

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 47.620422, // turn this.props.zipcode into lat and lng
            lng: -122.349358
          }
        }>

        <Marker 
            name={'Template Marker'}/>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer);