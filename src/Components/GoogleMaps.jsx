import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

const api = axios.create();
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 48.83603,
      lng: 2.31079
    },
    zoom: 15,
    apiKey: "AIzaSyC1Ypw-6oKrZmPWzjuCRt4FLTtGddQ6Baw"
  };

  componentDidMount() {
    const street = this.props.address.street;
    const city = this.props.address.city;
    var modifiedAddress = street.split(" ").join("+") + ",+" + city;

    api
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${modifiedAddress}&key=${this.props.apiKey}`
      )
      .then(apiRes => {
        console.log(apiRes);

        const lat = apiRes.data.results[0].geometry.location.lat;
        const lng = apiRes.data.results[0].geometry.location.lng;

        this.props.center.lat = lat;
        this.props.center.lng = lng;
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "200px", width: "300px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyC1Ypw-6oKrZmPWzjuCRt4FLTtGddQ6Baw",
            language: "eng"
          }}
          defaultCenter={this.props.center}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="Location"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;
