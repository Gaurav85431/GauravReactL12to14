import Student from "./Lec13 Props/Props"
import Student2 from "./Lec13 Props/Props2"
import Student3 from "./Lec13 Props/Props3"
import Student4 from "./Lec13 Props/Props4"
import Student5 from "./Lec13 Props/Props5"
import Student6 from "./Lec13 Props/Props6"


function PropsL13() {


  return (

    <>
      {/* Props.js */}
      <Student></Student>


      {/* Props2.js */}

      <Student2 name={'Gaurav'} />

      {/* Yaha se hm name pass kr rhe hai jo ki Props.js me jayega waha pr clg() hoga ya show hoga.  */}




      {/* send multiple data  */}
      {/* Props3.js */}
      <Student3 name={'Anil'} />
      <Student3 name={'Gaurav'} />
      <Student3 name={'Amit'} />




      {/* send multiple value like name, email etc. */}
      {/* Props4.js */}
      <Student4 name={'Gaurav'} email={'gaurav@gmal.com'} />





      {/* send multiple value like name, email etc. simultaneously */}
      {/* Props5.js */}
      <Student5 name={'Gaurav'} email={'gaurav@gmal.com'} />
      <Student5 name={'Saurav'} email={'saurav@gmal.com'} />
      <Student5 name={'Gautam'} email={'gutmv@gmal.com'} />






      {/* here we are send multiple value like addderess, mobile no. */}

      {/* props6.js */}

      <Student6 name={'Gaurav'} email="gaurav@hotmail.com" other={{ Address: "Bihar", mobile: "9098088990" }} />

      <Student6 name={'saurav'} email="saurav@hotmail.com" other={{ Address: "UP", mobile: "9444088990" }} />

      <Student6 name={'Faurav'} email="faurav@hotmail.com" other={{ Address: "MP", mobile: "9098011190" }} />









    </>
  )

}

export default PropsL13