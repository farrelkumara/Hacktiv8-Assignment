import "./App.css";
import Header from "./components/Header";
import OutputAntrian from "./components/OutputAntrian";

function App() {
  document.title = "Assignment 5";
  return (
    <div className="container">
      <Header />
      <hr />
      <OutputAntrian />
    </div>
  );
}

export default App;
