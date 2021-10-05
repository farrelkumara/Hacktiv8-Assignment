import Backlog from "./components/Backlog";
import Done from "./components/Done";
import Evaluation from "./components/Evaluation";
import Header from "./components/Header";
import InProgress from "./components/InProgress";
import Input from "./components/Input";

function App() {
  return (
    <div className="mx-3">
      <Header />
      <hr />
      <Input />
      <div className="row">
        <div className="col backlog my-5">
          <Backlog />
        </div>
        <div className="col inprogress my-5">
          <InProgress />
        </div>
        <div className="col evaluation my-5">
          <Evaluation />
        </div>
        <div className="col evaluation my-5">
          <Done />
        </div>
      </div>
    </div>
  );
}

export default App;
