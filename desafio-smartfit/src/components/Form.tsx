"use client"
import { styled } from "styled-components"
import { Buttons } from "./Buttons";
import { Horario } from "./Horario";
import { Inputs } from "./Inputs";

const Main = styled.div`
    
    p{
        font-size: smaller;
    }

`

const BoxForm = styled.form`
    border: solid 2px;
    border-color: #bebebe;
    border-radius: 8px;
    margin:18px 0px;
    padding: 15px;
    color:gray;

     h3{
        border-bottom: solid 1px #bebebe;
        font-size: medium;
        font-weight: normal;
        margin-bottom: 4px;
        padding-bottom:4px;
     }
`
const BorderBottomTilte = styled.div`
    width: 10%;
    border-bottom: solid 8px;
`

export function Form () {
    return(
        <Main>
                <h1>REABERTURA<br></br> SMART FIT</h1>
                <BorderBottomTilte></BorderBottomTilte>
            <p>
                O horário de funcionamento das nossar unidades está seguindo os decretos de cada municipio. Por isso, confira aqui se a sua unidade estará aberta e as medidas de segurança que estamos seguindo.
            </p>
            <BoxForm>
                <Horario />
                <h3>Qual período quer treinar?</h3>
                <Inputs />
                <Buttons />
            </BoxForm>
        </Main>
    )
}