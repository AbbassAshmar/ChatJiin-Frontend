import styled from "styled-components";

const Text = styled.h4`
font-size:var(--heading-4);
color : var(--main-color);
font-weight:900;
`

export default function Logo(){
    return (
        <Text>
            ChatJiin
        </Text>
    )
}