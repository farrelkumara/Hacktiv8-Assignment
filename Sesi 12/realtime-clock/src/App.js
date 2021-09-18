import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

const App = () => {
  document.title = "Challenge Realtime Clock";
  return (
    <div className="App">
      <ClassComponent />
      <br />
      <br />
      <br />
      <br />
      <FunctionalComponent />
    </div>
  );
};

export default App;
