import React, { Component } from 'react';
import SimpleMap from './google_map';

// flats in data shoud be imported in app and chain by classes <Class />.
import flats from '../../data/flats';

import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  // center() {
  //   return {
  //     lat: this.state.selectedFlat.lat,
  //     lng: this.state.selectedFlat.lng
  //   };
  // }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
    // Here does not know what index means yet
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
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default App;
