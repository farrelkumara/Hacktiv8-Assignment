import { useDispatch, useSelector } from "react-redux";

function Done() {
  const state = useSelector((state) => state);

  return (
    <div className="border">
      <h5 id="done" className="py-3">
        &nbsp; Done
      </h5>
      <div className="border container">
        <ul>
          {state.doneTask.map((doneTask, index) => {
            return (
              <>
                <div className="card me-4 my-3">
                  <div className="card-body">
                    <p key={index}>{doneTask}</p>
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

export default Done;
