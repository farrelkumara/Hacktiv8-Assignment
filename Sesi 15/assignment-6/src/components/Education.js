import img1 from "../images/education3.png";

function Education() {
  return (
    <div className="sec" id="education">
      <content>
        <h1 className="fw-bold">EDUCATION</h1>
        <div className="row mt-5">
          <div className="col fs-4">
            <ul>
              <li>Santa Maria Elementary School</li>
              <li>Susteran Junior High School</li>
              <li>Bruderan Senior High School</li>
              <li>Maranatha Christian University</li>
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

export default Education;
