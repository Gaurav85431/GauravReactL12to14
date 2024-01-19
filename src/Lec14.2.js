// Code to update the name by pressing button::-
import React from "react";
import StudentL14C from "./Lec14 Props with Class/L14Props3";
class UpdateTextL14 extends React.Component {


  constructor() {
    super();
    this.state = {
      name: "Gaurav"
    }// ye name change krne
  }

  render() {

    return (

      <div>

        <h1> Props use in class component to change the text.</h1>
        <br></br>


        <StudentL14C name={this.state.name} />

        <button onClick={() => { this.setState({ name: 'Anil' }) }}>Update Name</button>




      </div>





    )


  }




}

export default UpdateTextL14;