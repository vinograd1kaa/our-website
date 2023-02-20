import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.img`
  width: 35px;
  height: 35px;
  border: 1px;
  border-radius: 6px;
`


const Avatar = (props:any) => {
    return <StyledAvatar {...props}/>
}
export default Avatar