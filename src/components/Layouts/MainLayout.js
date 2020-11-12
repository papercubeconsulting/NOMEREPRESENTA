import React from "react";
import Footer from "../Footer";

function MainLayout(props) {
  return (
    <React.Fragment>
        {props.children}
        <Footer/>
    </React.Fragment>
  );
}

export default MainLayout;