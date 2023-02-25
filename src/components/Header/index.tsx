import React from "react";
import {FC} from "react";
import styled from "styled-components";
import Logo from "./logo/Logo";
import Input  from "./input/Input"
import UserHeader from "./User/user";
import Avatar from "./avatar/Avatar";

interface HeaderProps {
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width:100%;
  height: 50px;
  font-family: "AC-text", sans-serif;
`
const Header:FC<HeaderProps> = (props) => {
    return <StyledHeader {...props}>
        <Logo/>
        <Input type={"text"} placeholder={"Search for something here..."}/>
        <UserHeader>{"Some User"}<Avatar src={"https://ychef.files.bbci.co.uk/976x549/p0dnxrcv.jpg"}/></UserHeader>
    </StyledHeader>
}


export default Header