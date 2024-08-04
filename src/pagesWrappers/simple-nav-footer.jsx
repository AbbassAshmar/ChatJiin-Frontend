import styled from "styled-components"
import SimpleNavbar from "../components/SimpleNavbar/simple-navbar"
import { Outlet } from "react-router-dom";


const Container = styled.div`
    
`

export default function SimpleNavFooter(){
    return (
        <Container>
            <SimpleNavbar />
            <Outlet />
        </Container>
    )
}