import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function MainLayout(props) {
  return (
    <React.Fragment>
        <Navbar active={1}/>
        {props.children}
    </React.Fragment>
  );
}

export default MainLayout;