"use client"
import { styled } from "styled-components"

const Periodos = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 6px;
    width: 100%;
    height: 30px;
    align-items: center;   
`

const Label = styled.label`
    display: flex;
    border-bottom: solid 1px;
    border-color: #bebebe;
   

`
const LabelCheckbox = styled.label`
    display: flex;
    margin-top:30px;
    color: #303030;
    
    div{
        display: flex;
        justify-content: space-between;
        padding: 0px 6px;
        width: 100%;
        height: 30px;
        align-items: center;
    }

`


export function Inputs() {
    return(
        <form>
            <Label htmlFor="manhã">
                <input type="radio" id="manhã" name="horario" value="manhã 6:00 às 12:00" />
                <Periodos>
                    <p>Manhã</p>
                    <p>6:00 às 12:00</p>
                </Periodos>
            </Label>
            <Label htmlFor="tarde">
                <input type="radio" id="tarde" name="horario" value="tarde 12:01 às 18:00" />
                <Periodos>
                    <p>Tarde</p>
                    <p>12:01 às 18:00</p>   
                </Periodos>              
            </Label>
            <Label htmlFor="noite">
                <input type="radio" id="noite" name="horario" value="noite 18:01 às 23:00" />
                <Periodos>
                    <p>Noite</p>
                    <p>18:01 às 23:00</p>                 
                </Periodos>
            </Label>
            <LabelCheckbox htmlFor="unidadesFechadas">
                <input type="checkbox" id="unidadesFechadas" name="unidadesFechadas" value="unidadesFechadas" />
                <div>
                    <p>Exibir unidades fechadas</p>
                    <p>Resultados encontrados:</p>                 
                </div>
            </LabelCheckbox>

        </form>
    )
}