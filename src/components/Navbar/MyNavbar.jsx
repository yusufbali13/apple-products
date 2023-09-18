import logo from "../helpers/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.scss";
import { useState } from "react";

const MyNavbar = ({ setSelectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg "
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand>
          <a href="https://www.apple.com/" target="blank">
            <img src={logo} alt="apple.logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navBtn " id="basic-navbar-nav ">
          <Nav className="me-auto w-25">
            <Nav.Link>
              <button
                onClick={() => handleCategoryFilter("")}
                className={activeCategory === "" ? "active" : ""}
              >
                All
              </button>{" "}
            </Nav.Link>
            <Nav.Link>
              <button
                onClick={() => handleCategoryFilter("smartphone")}
                className={activeCategory === "smartphone" ? "active" : ""}
              >
                Iphone
              </button>{" "}
            </Nav.Link>
            <Nav.Link>
              <button
                onClick={() => handleCategoryFilter("laptop")}
                className={activeCategory === "laptop" ? "active" : ""}
              >
                Mac
              </button>{" "}
            </Nav.Link>
            <Nav.Link>
              <button
                onClick={() => handleCategoryFilter("tablet")}
                className={activeCategory === "tablet" ? "active" : ""}
              >
                Ipad
              </button>{" "}
            </Nav.Link>
            <Nav.Link>
              <button
                onClick={() => handleCategoryFilter("others")}
                className={activeCategory === "others" ? "active" : ""}
              >
                Others
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
