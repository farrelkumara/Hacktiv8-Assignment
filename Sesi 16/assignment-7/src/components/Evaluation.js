import { useDispatch, useSelector } from "react-redux";

function Evaluation() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const doneTask = (evt, i) => {
    evt.preventDefault();
    dispatch({
      type: "DONE_TASK",
      index: i,
    });
  };

  return (
    <div className="border">
      <h5 id="evaluation" className="py-3">
        &nbsp; Evaluation
      </h5>
      <div className="border container">
        <ul>
          {state.evaluateTask.map((evaluateTask, index) => {
            return (
              <>
                <div className="card me-4 my-3">
                  <div className="card-body">
                    <p key={index}>{evaluateTask}</p>
                    <button onClick={(evt) => doneTask(evt, index)}>
                      DONE
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Evaluation;
