import styled from "styled-components"

const Container = styled.div`
gap:.5rem;
display: flex;
flex-direction: column-reverse;
align-items: flex-start;
width: 100%;
`
const Label = styled.label`
font-size:var(--body);
font-weight: 500;
transition: color .3s;
color:${({$isError, $isLoading}) => $isLoading ? "var(--secondary-text)" : ($isError? "red" :'black')};
`
const Input = styled.input`
background-color: white;
border-radius: 4px;
font-size : var(--body);
font-weight: 500;
padding: .75rem 1rem;
width: 100%;
outline: none;
transition: border .3s, color .3s;

color:${({$isError}) => $isError? "red" :'black'};
border: 2px solid ${({$isError}) => $isError? "red" :'var(--secondary-color)'};

&:focus{
    border: 2px solid var(--main-color);
    color:var(--main-color)
}

&:focus ~ label{
    color:var(--main-color)
}

&::placeholder{
    color:var(--secondary-text);
    opacity: .3;
}

&:disabled{
    color : var(--secondary-text);
    border : 2px solid var(--secondary-text);
}
`

const ErrorMessage = styled.p`
color:${({$isLoading}) => $isLoading ? "var(--secondary-text)" : 'red'};
font-size : var(--small-1);
font-weight: bold;
`
export default function TextInput({isLoading, label, type, name, placeholder, id, errors}){
    return (
        <Container>
            <Input disabled={isLoading} $isError={errors?.error_fields.includes(name)} id={id} type={type} name={name} placeholder={placeholder}/>
            <Label $isLoading={isLoading} $isError={errors?.error_fields.includes(name)} htmlFor={id}>{label}</Label>
            {errors?.messages[name] && <ErrorMessage>{errors?.messages[name]}</ErrorMessage>}
        </Container>
    )
}