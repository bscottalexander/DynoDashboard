import * as React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import styled from "@emotion/styled";

const StyledFormContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});

const StyledButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});

const StyledButton = styled.button({
  marginTop: 10,
  padding: 10,
  border: "1px solid #ccc",
  borderRadius: 5,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "#eff6ff",
  },
});

const StyledError = styled.span({
  textAlign: "center",
  display: "block",
  width: "100%",
  color: "red",
  marginTop: 10,
});

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const onSubmitButtonClick = (event) => {
    event.preventDefault();

    if (email === "test@email.com" && password === "password123") {
      navigate("/");
    } else {
      setError("Invalid Credentials!");
    }
  };

  return (
    <>
      <StyledFormContainer>
        <form onSubmit={onFormSubmit}>
          <Input
            label="Email"
            id="login-email"
            type="email"
            value={email}
            onValueChange={setEmail}
          />
          <Input
            label="Password"
            id="login-password"
            type="password"
            value={password}
            onValueChange={setPassword}
          />
          <StyledButtonContainer>
            <StyledButton onClick={onSubmitButtonClick} type="submit">
              Login
            </StyledButton>
          </StyledButtonContainer>
          {error.length !== 0 ? <StyledError>{error}</StyledError> : null}
        </form>
      </StyledFormContainer>
    </>
  );
}

export default LoginPage;
