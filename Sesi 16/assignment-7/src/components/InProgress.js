import { useDispatch, useSelector } from "react-redux";

function InProgress() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const evaluateTask = (evt, i) => {
    evt.preventDefault();
    dispatch({
      type: "EVALUATE_TASK",
      index: i,
    });
  };

  return (
    <div className="border">
      <h5 id="inprogress" className=" py-3">
        &nbsp; InProgress
      </h5>
      <div className="border container">
        <ul>
          {state.takeTask.map((takeTask, index) => {
            return (
              <>
                <div className="card me-4 my-3">
                  <div className="card-body">
                    <p key={index}>{takeTask}</p>
                    <button onClick={(evt) => evaluateTask(evt, index)}>
                      Evaluate
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

export default InProgress;
