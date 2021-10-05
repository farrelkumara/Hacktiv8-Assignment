import img1 from "../images/avatar.png";

function About() {
  return (
    <div className="sec" id="about">
      <content>
        <h1 className="fw-bold">ABOUT ME</h1>
        <div className="row mt-5">
          <div className="col fs-4">
            <p>
              Hello, I'm Johanes Elian Farrel Kumara from Purwokerto, Central
              Java, I'm a student from Maranatha Christian University, now I'm
              following the Hacktiv8 Bootcamp for the Front End Developer
              Internship.
            </p>
          </div>
          <div className="col">
            <div className="mx-5">
              <img src={img1} alt="img" />
            </div>
          </div>
        </div>
      </content>
    </div>
  );
}

export default About;
