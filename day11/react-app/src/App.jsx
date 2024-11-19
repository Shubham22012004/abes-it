const App=({name, email, rollno})=>{
  return (
    <div>
      <h1>Student details</h1>
      <h2>Name: {name}</h2>
      <h2>Email id: {email}</h2>
      <h2>Roll no. : {rollno}</h2>
    </div>
  );
}

export default App;