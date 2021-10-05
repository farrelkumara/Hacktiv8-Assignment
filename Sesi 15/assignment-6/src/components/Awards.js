import img1 from "../images/awards2.jpg";

function Awards() {
  return (
    <div className="sec" id="awards">
      <content>
        <h1 className="fw-bold">AWARDS</h1>
        <div className="row mt-5">
          <div className="col fs-4">
            <ul>
              <li>3rd Place Middle School Band Festival</li>
              <li>3rd Place Men's High School Baskeball Competition</li>
            </ul>
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

export default Awards;
