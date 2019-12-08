import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Component/Layout";
import Exercises from "./Component/Exercises";
export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
