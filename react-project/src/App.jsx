function App() {
  return (
    <div className="App" id="parent">
      <h1 id="child">Hello, World!</h1>
      <h1 id="child2">Welcome to React!</h1>
    </div>
  )
}

export const Author=()=>{
  return(
    <div className="Author">
      <h5>Author: Debajit Dutta</h5>
    </div>
  )
};

export default App;