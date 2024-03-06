import styled from "@emotion/styled";
import * as React from "react";

const Root = styled.header({
  display: "flex",
  alignItems: "center",
  height: 60,
  width: "100%",
  boxSizing: "border-box",
  padding: 10,
  backgroundColor: "#2563eb",
  color: "#eff6ff",
});

const Title = styled.span({
  fontSize: 24,
  fontWeight: 500,
});

function AppBar() {
  return (
    <Root>
      <Title>DynoDashboard</Title>
    </Root>
  );
}

export default AppBar;
