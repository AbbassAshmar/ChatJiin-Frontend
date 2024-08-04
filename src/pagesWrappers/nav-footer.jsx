import styled from "styled-components"
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";


const Container = styled.div`
    
`

export default function NavFooter(){
    return (
        <Container>
            <Navbar />
            <Outlet />
        </Container>
    )
}