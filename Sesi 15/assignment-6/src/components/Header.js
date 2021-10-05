import { Link } from "react-router-dom";

function Header() {
  //   const onIdClick = (value) => {
  //     const element = document.getElementById(value);
  //     element.scrollIntoView();
  //   };

  return (
    <nav className="py-2 bg-light border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <Link
              to="/"
              // onClick={() => onIdClick("home")}
              className="nav-link link-dark px-2 active"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              // onClick={() => onIdClick("about")}
              className="nav-link link-dark px-2"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              // onClick={() => onIdClick("experience")}
              className="nav-link link-dark px-2"
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              // onClick={() => onIdClick("education")}
              className="nav-link link-dark px-2"
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/skills"
              // onClick={() => onIdClick("skills")}
              className="nav-link link-dark px-2"
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/interests"
              // onClick={() => onIdClick("interests")}
              className="nav-link link-dark px-2"
            >
              Interests
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/awards"
              // onClick={() => onIdClick("awards")}
              className="nav-link link-dark px-2"
            >
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
