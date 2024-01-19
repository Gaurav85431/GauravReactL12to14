// To update the text like name

import React from 'react';
class StudentL14C extends React.Component {

  render() {
    // yadi hme dekha hai ki kon sb data pass hua hai to.

    console.log(this.props);
    // ye clg bahar nhi chalega bcz class component ke under hm console kisi function ke under use karna hota hai. Directly hm use nhi kar sakte hai.

    return (

      <>

        {/* <div>{this.props.name}</div> */}






        <div style={{ backgroundColor: 'blue', color: 'yellow' }} >

          <h1>Student {this.props.name}</h1>


        </div>

        {/* <div>Total data ={this.props}</div>
        // it will give error */}


      </>


    )
  }


}


export default StudentL14C;