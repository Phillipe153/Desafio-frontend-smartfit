/* eslint-disable @next/next/no-img-element */
"use client"
import { styled } from "styled-components"

// import styled from "../../node_modules/@emotion/styled/types/index"

const HourWithIcon = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`
const Icon = styled.img`
    width: 25px;
    height: 25px;
`
export function Horario() {
    return(
        <HourWithIcon>
            <Icon src="../images/icon1.ico"  alt="Ícone de um relogio" />
            <p>Horário</p>

        </HourWithIcon>
    )
}