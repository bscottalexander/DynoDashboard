import * as React from "react";
import styled from "@emotion/styled";

const Root = styled.div({
  marginTop: 10,
});
const StyledInput = styled.input({
  display: "flex",
  padding: 10,
  border: "1px solid #ccc",
  borderRadius: 5,
  marginTop: 5,
});

function Input(props) {
  const { id, label, type, value, onValueChange, onFocus, onBlur } = props;

  const onValueChangeHandler = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <Root>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        id={id}
        type={type}
        value={value}
        onChange={onValueChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Root>
  );
}

export default Input;
