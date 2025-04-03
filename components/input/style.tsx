import styled from "styled-components/native";

type CampoDeTextoProps = {
    erro: boolean
}

export const CampoTexto = styled.TextInput<CampoDeTextoProps>`
background-color: #D9D9D9;
font-size: 18px;
text-align: left;
padding:20px;
border: 2px solid ${({erro} : {erro: boolean}) => erro ? '#e03e59' : '#33415c'} ;
`