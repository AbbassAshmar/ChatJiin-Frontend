import styled from "styled-components";
import TextInput from "../../components/TextInput/text-input";
import { useEffect, useState } from "react";
import useSendRequest from "../../hooks/use-send-request";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
width:100%;
display: flex;
align-items: center;
justify-content: center;
padding:2rem 2rem;
@media screen and (max-width:800px){
    padding:2rem 1rem;
}
`

const Form = styled.form`
width: 40%;
padding:2rem;
gap:2rem;
display: flex;
flex-direction: column;
border : 3px solid var(--secondary-color);
border-radius: 6px;
min-width:500px;
max-width:600px;
@media screen and (max-width:800px) {
    width:100%;
    min-width: 0;
    max-width: unset;
}
`
const Title = styled.h4`
font-weight:900;
font-size : var(--heading-4);
color: var(--main-color);
`
const Inputs = styled.div`
gap:1rem;
display: flex;
flex-direction: column;
`
const SubmitButton = styled.button`
width:100%;
padding:.75rem 1rem;
background-color : var(--main-color);
color :white;
font-size : var(--body);
font-weight : bold;
border-radius: 4px;
border:none;
outline:none;
cursor: pointer;
transition: background-color .3s;
&:hover{
    background-color: var(--main-color-dark);
}
&:disabled{
    background-color: grey;
}
`

export default function Register(){
    const [errors, setErrors] = useState({messages : {}, error_fields : []});
    const [isLoading, setIsLoading] = useState(false);

    const [sendRequest] = useSendRequest();
    const navigate = useNavigate();

    function handleResponse(request, response){
        if (!request){
            return;
        }

        if (request.status == 200){
            navigate("/");
        }

        // validation error
        else if (request.status == 400){
            setErrors({messages:request.errors.messages, error_fields:request.errors.error_fields})
        }
        
        // other errors
        else{
            setErrors({messages : {} , error_fields : []});
        }

    }

    async function requestLogin(data){
        const URL = "/api/auth/register";
        const INIT = {
            method : "POST",
            body : data
        }

        const {request, response} = await sendRequest(URL ,INIT);
        handleResponse(request, response);
        setIsLoading(false);
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        const DATA = new FormData(e.target);
        await requestLogin(DATA);
    }

    return(
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Title>Create an account</Title>
                <Inputs>
                    <TextInput isLoading={isLoading} errors={errors} label={"Username"} name={"name"} type={"text"} id={"login_name"} placeholder={"ex. Jack The Ripper"}/>
                    <TextInput isLoading={isLoading} errors={errors} label={"Email"} name={"email"} type={"email"} id={"login_email"} placeholder={"ex. jack@gmail.com"}/>
                    <TextInput isLoading={isLoading} errors={errors} label={"Password"} name={"password"} type={"password"} id={"login_password"} placeholder={"ex. $#AkdL4394K"}/>
                    <TextInput isLoading={isLoading} errors={errors} label={"Confirm Password"} name={"confirm_password"} type={"password"} id={"login_confirm_password"} placeholder={"ex. $#AkdL4394K"}/>
                </Inputs>
                <SubmitButton disabled={isLoading} type="submit">Create Account</SubmitButton>
            </Form>
        </Container>
    )
}