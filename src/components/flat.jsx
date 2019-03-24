import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
    // Here is the index
  }

  render() {
    return (
      <div
        className={`card${this.props.selected ? " active" : ""}`}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">
          {this.props.flat.price}
          {this.props.flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a href="#" className="card-link" onClick={this.handleClick}></a>
      </div>
    );
    // You need something in href otherwise page reload and selecting goes back original one
  }
}

export default Flat;
