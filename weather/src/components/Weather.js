import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && !this.props.err && (
          <div>
            <h3>
              {this.props.city}, {this.props.country}
            </h3>
            <h3>
              Conditions: {this.props.temp}&deg;F, {this.props.conditions}
            </h3>
          </div>
        )}
        {this.props.err && <div>{this.props.err}</div>}
      </div>
    );
  }
}

export default Weather;
