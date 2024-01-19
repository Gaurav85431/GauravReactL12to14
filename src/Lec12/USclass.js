import React, { Component } from 'react';

class MyApp extends Component {


  constructor() {
    super(); // to call parent constructor

    this.state = {
      data: "Gaurav"
    }

  }




  // render() function ke under return() do.

  render() {
    return (
      <>
        <h1>state using class component</h1>

        <h1>{this.state.data}</h1>




      </>

    )

  }

}


export default MyApp;