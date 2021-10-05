import img1 from "../images/interests.jpg";

function Interests() {
  return (
    <div className="sec" id="interests">
      <content>
        <h1 className="fw-bold">INTERESTS</h1>
        <div className="row mt-5">
          <div className="col fs-4">
            <p>
              I'm interested in sports which is basketball, and music as well
            </p>
          </div>
          <div className="col fs-4">
            <div className="mx-5">
              <img src={img1} alt="img" />
            </div>
          </div>
        </div>
      </content>
    </div>
  );
}

export default Interests;
