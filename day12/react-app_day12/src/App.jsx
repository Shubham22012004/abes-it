import MovieList from "./MoviesList";
const App = ()=>{
  return (
    <div style={{margin:0, padding:0}}>
      <h1 style={{backgroundColor:"black",
        color:"white",
        fontSize:"50px",
        textAlign:"center",
      }}>
        Netflix clone App
      </h1>
       <MovieList />
    </div>
  )
}

export default App;