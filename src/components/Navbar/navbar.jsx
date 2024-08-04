import styled from "styled-components";
import Logo from "../logo";
import { useState } from "react";
import SideNav from "./components/side-nav";

const Container = styled.div`
width:100%;
display: flex;
padding:1rem 2rem;
background-color:white;
align-items: center;
justify-content: space-between;
box-shadow:0px 4px 4px rgba(0,0,0,0.2);
@media screen and (max-width:800px){
    padding:1rem 1rem;
}
`

const LogoContainer=styled.div`
display: flex;
gap:.5rem;
align-items: center;
`
const Hamburger = styled.div`
font-size:24px;
color: var(--main-color);
cursor: pointer;
&:hover{
    color: var(--main-color-dark);
}
`
const User = styled.div`
display: flex;
gap:.5rem;
align-items: start;
`

const PictureContainer = styled.div`
border-radius: 50%;
overflow: hidden;
width: 32px;
height:32px;
`
const Picture = styled.img`
width:100%;
height:100%;
border-radius:50%;
object-fit:cover;
`
const UserName = styled.p`
font-weight:bold;
font-size:var(--small-1);
`
const UserType = styled.p`
color:var(--secondary-text);
font-weight:bold;
font-size:var(--small-2);
`

export default function Navbar(){
    const [showSideNav, setShowSideNav] = useState(false);

    function handleShowSideNav(){
        setShowSideNav(true);
    }

    return (
        <>
            {showSideNav && <SideNav showSideNav={showSideNav} setShowSideNav={setShowSideNav}/>}
            <Container>
                <LogoContainer>
                    <Hamburger onClick={handleShowSideNav} className="fa-solid fa-bars"/>
                    <Logo />
                </LogoContainer>
                <User>
                    <PictureContainer>
                        <Picture />
                    </PictureContainer>
                    <div style={{display:"flex", flexDirection:"column",gap:"4px"}}>
                        <UserName>jinn stark</UserName>
                        <UserType>Super admin</UserType>
                    </div>  
                </User>
            </Container>
        </>
    )
}