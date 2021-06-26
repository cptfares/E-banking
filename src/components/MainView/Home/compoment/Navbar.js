import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [offset, setOffset] = useState(15);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    if (offset < 43) {
      if (document.getElementById("type") != null) {
        console.log(offset);
        document.getElementById("log").style.top = offset;
      }
    } else {
      setOffset(0);
    }
  }, [offset]);
  return (
    <div style={{ height: "2rem !important " }}>
      <nav id="type" class="navbar top navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-nav">
            <a class="nav-item nav-link active " href="#">
              Particuliers
            </a>
            <a class="nav-item nav-link" href="#">
              professionals
            </a>
          </div>
        </div>
      </nav>

      <nav
        id="log"
        style={{ position: "fixed", width: "100%", top: { offset } }}
        class="navbar navbar-light bg-light"
      >
        <div class="container-fluid">
          <a class="navbar-brand">E-BANKING</a>
          <div class="d-flex">
            <Link to="/signUp">
              <button class="btn btn-success" type="submit">
                Devenir Client
              </button>
            </Link>
            <Link to="/login">
              <button class="btn btn-primary"> Accéder à mes comptes </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
