// receive multiple value simultaneously


function Student4(props) {

  console.log(props);

  return (
    <>

      <div style={{ backgroundColor: "skyblue", margin: 10 }}>

        <hr />
        <h1>Hello {props.name}</h1>
        <h2>Email : {props.email}</h2>

      </div>
    </>
  )


}
export default Student4;