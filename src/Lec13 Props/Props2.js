function Student2(props) {

  console.log(props.name);

  // props me data send hoga Lec13.js file se yaha pr recv kar rhe hai.

  return (
    <>
      <hr />
      <h1>Name is {props.name}</h1>

    </>
  )


}
export default Student2;