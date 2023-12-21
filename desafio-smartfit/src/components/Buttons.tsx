"use client"
import { MouseEvent, ChangeEvent } from 'react';
import { styled } from "styled-components";

import { useContext, useState, useEffect } from 'react';
import { SamrtFitContext } from "@/context/smartfitContext";


const DivButtons = styled.div`
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
// export interface Product<T> extends ChangeEvent{
//     value: string
// }

const HandleClickSearchUnity = (event:  MouseEvent< HTMLButtonElement>) =>{
    event.preventDefault();
    console.log(event.target.value);
    
}



export function Buttons() {
    const {setFechadas, setHorario } = useContext(SamrtFitContext)
    const HandleClickClear = (event: MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();

        setHorario('')
        setFechadas(false)
        const horarioManha = document.getElementById('manhã') as HTMLInputElement;
        const horarioTarde = document.getElementById('tarde') as HTMLInputElement;
        const horarioNoite = document.getElementById('noite') as HTMLInputElement;
        const unidadesFechadas = document.getElementById('unidadesFechadas') as HTMLInputElement;

        
        horarioManha!.checked = false;
        horarioTarde!.checked = false;
        horarioNoite!.checked = false;
        unidadesFechadas!.checked = false;

    
       } 
    return(
        <DivButtons>
            <button value='teste' onClick={HandleClickSearchUnity}>ENCONTRAR UNIDADE</button>
            <button value='teste2' onClick={(event) => HandleClickClear(event)}>LIMPAR</button>
        </DivButtons>
    )
}