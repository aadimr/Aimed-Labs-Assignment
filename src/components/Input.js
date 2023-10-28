import styled from "styled-components"

export const Input = styled.input`
width:100%;
height:2.5rem;
padding:.7rem .5rem;
font-size:1rem;
margin:.5rem 0rem 1rem 0rem;
`

export const StyledInput = styled(Input)`
border:none;
margin:0;
&:focus {
    outline: none;
  }
`
