// receive multiple value  at multiple times simultaneously


function Student6(props) {

  console.log(props);

  return (
    <>

      <div style={{ backgroundColor: "yellow", margin: 10 }}>

        <hr />
        <h1>Hello {props.name}</h1>
        <h2>Email : {props.email}</h2>
        <h4>Address:{props.other.Address}</h4>
        <h4>🎨 Mobile:{props.other.mobile}</h4>

      </div>
    </>
  )


}
export default Student6;