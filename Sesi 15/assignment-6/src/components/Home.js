import img1 from "../images/avatar.png";

function Home() {
  return (
    <div className="sec" id="home">
      <content>
        <h1 className="fw-bold"></h1>
        <div className="row mt-5">
          <div className="col fs-4">
            <p>
              <h1 className="fw-bold">
                Hello, I'm{" "}
                <h1 className="fw-bold" id="farrel">
                  Farrel
                </h1>{" "}
                Welcome to my World
              </h1>
            </p>
          </div>
        </div>
      </content>
    </div>
  );
}

export default Home;
