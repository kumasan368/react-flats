import React, { Component } from 'react';
// import SimpleMap from './google_map';
import GoogleMapReact from 'google-map-react';
// flats in data shoud be imported in app and chain by classes <Class />.
import flats from '../../data/flats';

import FlatList from './flat_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }


  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    // Here does not know what index means yet
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
