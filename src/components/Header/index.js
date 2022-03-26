import React from "react";

function Header(props) {
  return (
      <header>
      <a className="navbar-brand" href="#">
        Curtis Van Hong, CPA{" "}
      </a>
        {props.children}
      </header>
  );
}

export default Header;
