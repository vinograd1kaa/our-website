import React from 'react';
import styled from "styled-components";


const StyledLogoText = styled.p`
  font-weight: 700;
  color: ${props => props.theme.colors.textHeader};
  font-size:16px;
`



const LogoText = (props:any) => {
    return <StyledLogoText {...props}>MeetMax</StyledLogoText>
}


export default LogoText;