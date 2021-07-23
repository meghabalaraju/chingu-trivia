import React from "react";
import { Container } from "@material-ui/core";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
