import styled from "styled-components"
import { Outlet, useNavigate } from "react-router-dom";
import useUserState from "../hooks/use-user-state";
import { useEffect } from "react";


const Container = styled.div`
    
`

export default function RequiresAuthentication(){
    const userState = useUserState();
    const navigate = useNavigate();

    useEffect(()=>{
        if (!userState.isAuthenticated){
            navigate("/login");
        }
    }, [userState])

    return (
        <Container>
            <Outlet />
        </Container>
    )
}