import img1 from "../images/about.png";

function Experience() {
  return (
    <div className="sec" id="experience">
      <content>
        <h1 className="fw-bold">EXPERIENCE</h1>
        <div className="row mt-5">
          <div className="col fs-4">
            <p>
              I'm creating an Augmented Reality Applications using Unity 3D for
              elementary children's learning as a practical work assignment
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

export default Experience;
