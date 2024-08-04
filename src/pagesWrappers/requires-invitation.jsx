import styled from "styled-components"
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useSendRequest from "../../../AdminPanel/src/hooks/use-send-request";


const Container = styled.div`
    
`

export default function RequiresInvitation(){
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();
    const [sendRequest] = useSendRequest();

    useEffect(()=>{
        const TOKEN = searchParams.get("token");
        requestTokenValidation(TOKEN);
    }, [searchParams])

    function handleUserUnInvited(){
        navigate("/invitation-required-error");
    }

    function handleResponse(request, response){
        if (request?.status === 200) return;
        handleUserUnInvited();
    }

    async function requestTokenValidation(token){
        if (!token) handleUserUnInvited();

        const URL = "/api/auth/invitation-tokens/validate";
        const INIT = {
            method : "GET",
            headers : {
                'accept': 'application/json',
                'content-type': "application/json",
                "invitation-token" : token
            }
        };

        const {request, response} = await sendRequest(URL, INIT);
        handleResponse(request, response);
    }

    return (
        <Container>
            <Outlet />
        </Container>
    )
}