import styled from "@emotion/styled";
import * as React from "react";

const Root = styled.div({
  width: "100%",
  maxWidth: 500,
  border: "1px solid #e5e7eb",
  borderRadius: 4,
  boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
  "> span": {
    fontWeight: 600,
  },
  "> table": {
    
  }
});

const StyledTitle = styled.span({
  display: 'flex',
  justifyContent: 'center',
  margin: 10,
  fontSize: 25
})

const StyledTableContainer = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
  '& th, & td': {
    borderBottom: '1px solid #ccc',
    textAlign: 'left',
  },
  '& th': {
    fontWeight: 'bold',
    padding: '10px',
  },
  '& td': {
    padding: '10px',
  },
})

function Table(props) {
  const { title, columns, rows } = props;
  return (
    <Root>
      <StyledTitle>{title}</StyledTitle>
      <StyledTableContainer>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((column, idx) => (
                <td key={columns[idx]}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTableContainer>
    </Root>
  );
}

export default Table;


