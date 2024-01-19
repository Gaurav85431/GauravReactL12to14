import { useState } from "react"
import Student7 from "./Lec13 Props/Props7"

{/* Here we want to update the data. i.e. when click on button then the text will change.
iske liye hm old concept useStyle ko v use karenge.
*/}





function Props13S() {


  const [name, setName] = useState("Gaurav");


  return (

    <>
      <Student7 name={name} />
      {/* useState wala name aa rha hai. */}


      <button onClick={() => { setName("Gaurav Pushpam") }}>Update Name</button>


    </>

  )

}
export default Props13S