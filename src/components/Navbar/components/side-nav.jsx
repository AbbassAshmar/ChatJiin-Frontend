import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
position: absolute;
display: flex;
top:0;
left:0;
z-index: 200;
width:100%;
height: 100vh;
`
const SideMenu = styled.div`
flex:1.5;
background-color: white;
padding:1rem;
display: flex;
flex-direction: column;
gap:1rem;
`
const SideMenuHeader = styled.div`
width:100%;
display: flex;
justify-content: flex-end;
align-items: center;
`
const XIcon = styled.i`
font-size:24px;
font-weight:900;
color : var(--main-color);
cursor: pointer;
`
const SideMenuContent = styled.div`
gap:1rem;
width:100%;
display: flex;
flex-direction: column;
`
const Section = styled.div`
gap:1rem;
width:100%;
display: flex;
flex-direction: column;
`
const Heading = styled.p`
color : var(--secondary-text);
font-size: var(--body);
font-weight:bold;
opacity: .6;
`
const PagesList = styled.div`
display: flex;
flex-direction: column;
gap:1rem;
`
const Page = styled(Link)`
display: flex;
gap:.5rem;
align-items: center;
text-decoration:none;
color:black;
`
const PageIcon = styled.i`
`
const PageText = styled.p`
font-size:var(--body);
font-weight:bold;
`
const DarkOverlay = styled.div`
flex:6;
height:100%;
background-color: rgba(0,0,0,0.4);
`
export default function SideNav({showSideNav, setShowSideNav}){
    function handleCloseSideNav(){
        setShowSideNav(false);
    }

    return (
        <Container>
            <SideMenu>
                <SideMenuHeader>
                    <XIcon onClick={handleCloseSideNav} className="fa-solid fa-xmark"/>
                </SideMenuHeader>
                <SideMenuContent>
                    <Section>
                        <Heading>Manage</Heading>
                        <PagesList> 
                            <Page to="/users">
                                <PageIcon className="fa-regular fa-user"/>
                                <PageText>User</PageText>
                            </Page>
                        </PagesList>
                    </Section>
                </SideMenuContent>
            </SideMenu>
            <DarkOverlay onClick={handleCloseSideNav} />
        </Container>
    )
}