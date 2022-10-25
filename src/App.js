import './App.css';
// import Base from "./pages/Base";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Information from "./pages/Information";

function App() {
  return (
    <div className="App">
          <Home/>
        {/*<Base/>*/}
        <Results/>
        <Information/>
    </div>
    

  );
}

export default App;
