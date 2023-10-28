import styled from "styled-components"

export const StyledButton = styled.button`
background-color:#0066b2;
color:white;
width:20rem;
&:focus {
    outline: none;
  }

  @media (max-width:800px){
    width:15rem;
}
`