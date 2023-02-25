import React from "react";
import styled from "styled-components";
import LogoText from "../LogoText/LogoText";

const StyledLogo = styled.div`
  display: flex;
  height: 100%;
  width: 200px;
  align-items: center;
  justify-content: start;
  padding: 0px 15px  ;
`

const Logo= (props:any) => {
    return <StyledLogo {...props}>
        <img src={require("../../../assets/logo.PNG")} alt="avatar"/>
        <LogoText/>
    </StyledLogo>
}

export default Logo