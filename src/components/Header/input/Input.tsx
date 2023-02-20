import React from "react";
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";


const StyledInput = styled.input`
  outline: none;
  border: none;
  width:400px;
  height: 28px;
  padding: 10px 5px;
  &:focus{
   outline: none; 
  }
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  width:450px;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.outline};
  border-radius: 7px;
  padding: 3px 20px;
`

const Input = (props:any) => {
    return (<StyledDiv><AiOutlineSearch/><StyledInput {...props}/></StyledDiv>)
}


export default Input