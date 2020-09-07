import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.fetchWeather}>
          <input type={"text"} name={"cityInput"} placeholder={"City"} />
          <input type={"text"} name={"countryInput"} placeholder={"Country"} />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
