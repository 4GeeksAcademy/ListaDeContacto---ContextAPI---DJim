import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 m-0">
      <div className="container-fluid bg-primary">
        <Link
          to="/"
          className="my_contact nav-link active fs-1 text-white"
          aria-current="page"
        >
          My contactList
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end fs-5 "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to="/"
              className="contact_home nav-link active text-white"
              aria-current="page"
            >
              Home
            </Link>
            <Link to="/add-contact" className="create_contact nav-link active text-white">
              Create a contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


