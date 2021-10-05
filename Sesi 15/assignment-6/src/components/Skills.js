import img1 from "../images/skills.png";

function Skills() {
  return (
    <div className="sec" id="skills">
      <content>
        <h1 className="fw-bold">SKILLS</h1>
        <div className="row mt-5">
          <div className="col fs-4">
            <p>
              I'm good in HTML, CSS and JavaScript, I'm a hardworking person,
              optimistic and team player
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

export default Skills;
