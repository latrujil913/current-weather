import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={}>
          <input type={"text"} name={"cityInput"} placeholder={"city"} />
          <input type={"text"} name={"countryInput"} placeholder={"country"} />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
