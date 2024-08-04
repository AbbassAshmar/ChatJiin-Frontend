import styled from "styled-components";
import Logo from "../logo";


const Container = styled.div`
width:100%;
padding:1rem 2rem;
display: flex;
align-items: center;
justify-content: flex-start;
background-color: white;
@media screen and (max-width:800px){
    padding:1rem 1rem;
}
`

export default function SimpleNavbar(){
    return(
        <Container>
            <Logo />
        </Container>
    )
}