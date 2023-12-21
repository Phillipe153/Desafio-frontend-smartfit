"use client"
import { styled } from "styled-components"

const LegendIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;    
    background-color: #f0efef;
    justify-content: space-around;
    /* width: auto; */
    `
const Icon = styled.img`
    width: 50px;
    height: 50px;
    `
const GropuIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Teste1 = styled.div`

    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    
    div{
        display:flex;
        flex-direction: column;
        align-items: center;
    }

     p{
        font-size:small;
     }
`
export function Lengenda() {
    return(
        <LegendIcons>
            <GropuIcons>
            <h5>Máscara</h5>
                <Teste1>
                    <div>
                        <Icon src="../images/icon2.png"  atl='uso obrigatorio de mascara' />
                        <p>Obrigatório</p>
                    </div>
                    <div>            
                        <Icon src="../images/icon3.png"  atl='uso recomendado de mascara' />
                        <p>Recomendado</p>
                    </div>
                </Teste1>
            </GropuIcons>
            <GropuIcons>
            <h5>Toalha</h5>
            <Teste1>
                <div>
                    <Icon src="../images/icon4.png"  atl='uso obrigatorio de toalha' />
                    <p>Obrigatório</p>
                </div>
                <div>            
                    <Icon src="../images/icon5.png"  atl='uso recomendado de toalha' />
                    <p>Recomendado</p>
                </div>
            </Teste1>
            </GropuIcons>
            <GropuIcons>
            <h5>Máscara</h5>
                <Teste1>
                    <div>
                        <Icon src="../images/icon6.png"  atl='uso obrigatorio de mascara' />
                        <p>Parcial</p>
                    </div>
                    <div>            
                        <Icon src="../images/icon7.png"  atl='uso recomendado de mascara' />
                        <p>Proibído</p>
                    </div>
                </Teste1>
            </GropuIcons>
            <GropuIcons>
            <h5>Toalha</h5>
            <Teste1>
                <div>
                    <Icon src="../images/icon8.png"  atl='uso obrigatorio de toalha' />
                    <p>Parcial</p>
                </div>
                <div>            
                    <Icon src="../images/icon9.png"  atl='uso recomendado de toalha' />
                    <p>Liberado</p>
                </div>
                <div>
                    <Icon src="../images/icon.png"  atl='uso recomendado de toalha' />
                    <p>Fechado</p>
                </div>
            </Teste1>
            </GropuIcons>
        </LegendIcons>
    )
}