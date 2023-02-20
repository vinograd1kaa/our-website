import React from "react";
import styled from "styled-components";



const StyledUser = styled.div`
  display: flex;
  font-weight: 500;
  width:150px;
  height: 100%;
  color: ${props => props.theme.colors.textColor};
  font-family: "AC-text" , sans-serif;
  align-items: center;
  justify-content: space-evenly;
  
`

const UserHeader = (props:any) => {
    return <StyledUser {...props}></StyledUser>
}

export default UserHeader

