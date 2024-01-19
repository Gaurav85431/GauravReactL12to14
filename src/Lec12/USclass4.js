import React, { Component } from 'react';

class MyApp4 extends Component {


  constructor() {
    super(); // to call parent constructor


    this.state = {
      data: 1
    }
  }

  // without function keyword ke hm function banayenge.

  apple() {


    this.setState({ data: this.state.data + 1 }); //see constructor

  }





  // render() function ke under return() do.

  render() {
    return (
      <>
        <h1>state using class component</h1>

        <h1>{this.state.data}</h1>

        <button onClick={() => this.apple()}>Update Data</button>



      </>

    )

  }

}


export default MyApp4;