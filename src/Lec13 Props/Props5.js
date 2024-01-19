// receive multiple value  at multiple times simultaneously


function Student5(props) {

  console.log(props);

  return (
    <>

      <div style={{ backgroundColor: "red", margin: 10 }}>

        <hr />
        <h1>Hello {props.name}</h1>
        <h2>Email : {props.email}</h2>

      </div>
    </>
  )


}
export default Student5;