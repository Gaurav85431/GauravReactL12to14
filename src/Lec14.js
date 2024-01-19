import StudentL14 from "./Lec14 Props with Class/L14Props1";
import StudentL14B from "./Lec14 Props with Class/L14Props2";

function PropsL14() {

  return (

    <>

      <div className="App">

        <h1>Props in class component !</h1>

        {/* <StudentL14 name={'Gaurav'} /> */}

        <StudentL14 name={'Gaurav'} email={"anil@gmail.com"} />


      </div>



      {/* L14Props2.js
Here send multiple value 
*/}


      <StudentL14B name={"Gaurav Pushpam"} email={"gaurav@outlook.com"} />
      <StudentL14B name={"Gaurav Kumar"} email={"gaurav@hotmail.com"} />
      <StudentL14B name={"Gaurav Mishra"} email={"gaurav@reddifmail.com"} />



    </>



  )



}


export default PropsL14;