import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span className="fs-4">Testing example</span>
          </a>
        </div>
      </header>

      <div className="px-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Why do we need Test ?</h1>
          <p className="col-md-8 fs-4">
            To guarantee our code quality. And to show the people that we also
            care about it and wish to give something that already proven, at
            least by ourself
          </p>
          <Link
            to="/users"
            className="btn btn-primary btn-lg"
            type="button"
            role="button"
          >
            User List
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
