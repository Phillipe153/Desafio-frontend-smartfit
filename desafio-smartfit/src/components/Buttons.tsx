"use client"
import { styled } from "styled-components"


const Teste = styled.div`
    display: flex;
    justify-content: space-around;

    button{
        width: 275px;
        height: 30px;
        border-radius: 4px;
        margin-top: 25px;
        border: solid 1px #bebebe;
        background-color: #fff;
        cursor: pointer;

        &:hover{
            background-color: #f9f0f0;
        }
    }


    
    :first-child{
        border-style: none;
        background-color: #FCB823;
        &:hover{
            background-color:#dba228;
        }
    }
`
export function Buttons() {
    return(
        <Teste>
            <button>ENCONTRAR UNIDADE</button>
            <button>LIMPAR</button>
        </Teste>
    )
}