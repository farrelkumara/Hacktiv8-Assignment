import { useSelector, useDispatch } from "react-redux";

function Backlog() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const takeTask = (evt, i) => {
    evt.preventDefault();
    dispatch({
      type: "TAKE_TASK",
      index: i,
    });
  };

  return (
    <div className="border">
      <h5 id="backlog" className="py-3">
        &nbsp; Backlog
      </h5>
      <div className="border container">
        <ul>
          {state.items.map((item, index) => {
            return (
              <>
                <div className="card me-4 my-3">
                  <div className="card-body">
                    <p key={index}>{item}</p>
                    <button onClick={(evt) => takeTask(evt, index)}>
                      Take
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

export default Backlog;
