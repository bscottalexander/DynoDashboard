import * as React from "react";
import AppBar from "./app-bar";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import globalStyle from "../style";
import { Outlet } from "react-router-dom";

const Content = styled.div({
  marginTop: 10,
});

function Layout() {
  return (
    <>
      <Global styles={globalStyle} />
      <AppBar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

export default Layout;
