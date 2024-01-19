import React from 'react';
export default class StudentL14B extends React.Component {

  render() {
    // yadi hme dekha hai ki kon sb data pass hua hai to.

    console.log(this.props);
    // ye clg bahar nhi chalega bcz class component ke under hm console kisi function ke under use karna hota hai. Directly hm use nhi kar sakte hai.

    return (

      <>

        {/* <div>{this.props.name}</div> */}






        <div style={{ backgroundColor: 'red', color: 'white' }} >

          <h1>Student {this.props.name}</h1>

          <h2> Email:✍️ {this.props.email} </h2>

        </div>

        {/* <div>Total data ={this.props}</div>
        // it will give error */}


      </>


    )
  }


}

