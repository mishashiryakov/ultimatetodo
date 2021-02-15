import React from "react";
import withHocs from "./AppHeaderHoc";

const AppHeader = () => {
  return (
    <h1>My Todo list</h1>
  );
};

export default withHocs(AppHeader);
