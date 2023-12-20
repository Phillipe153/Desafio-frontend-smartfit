
"use client"
import { SamrtFitContext } from "@/context/smartfitContext"
import { Unidades } from "@/interface/unidades"
import { useContext } from "react"
import { styled } from "styled-components"


const BorderBottomTilte = styled.div`
    width: 90%;
    border-bottom: solid 1px #bebebe;
    margin: 15px 0px;
`
const Card = styled.div`
    display: grid;
    grid-template-columns: 250px 250px 250px;
    /* grid-template-rows: 50px 100px; */
    gap: 10px;
    margin-top: 10px;
`
const Icon = styled.img`
    width: 50px;
    height: 50px;
`

const Item = styled.div`
    background-color: #f0efef;
    border: 2px solid #eae9e9;;
    border-radius: 8px;
    padding: 10px;

    .aberto{
        margin: 5px 0px;
        color: green;
    }
    .fechado{
        margin: 5px 0px;
        color: red;
    }

    h3{
        color: #555555;
        margin: 10px 0px;

    }
`

const Horario = styled.div`
    display: grid;
    grid-template-columns:50% 50% ;
    /* flex-direction: row; */
`

const Endereco = styled.div`
    font-size: small;
    p{
        margin: 0px;
        color: #757575
    }

`
export function FilterByOpen() {
    const { unidades } = useContext(SamrtFitContext)


    return(
        <Card>{
            unidades.map((e: Unidades) => (
                    e.opened &&
                    <Item key={e.id}>
                        <h5 className="aberto">{e.opened && 'Aberto'}</h5>
                        <h5 className="fechado">{!e.opened && 'Fechado'}</h5>
                        <h3>{`${e.title}`}</h3>
                        <Endereco>
                            <p>{e.content?.split('>')[1]?.split('&')[0]}</p>
                            <p>{e.content?.split(';')[1]?.split('<')[0]}</p>
                            <p>{e.content?.split("<br>")[1]?.split('<')[0]}</p>
                        </Endereco>
                        {
                            e.opened &&
                            <div>
                                <BorderBottomTilte></BorderBottomTilte>
                                {e.mask === 'required' && <Icon src='../images/icon2.png'/>}
                                {e.mask === 'recommended' && <Icon src='../images/icon3.png'/>}
                                {e.towel === 'required' && <Icon src='../images/icon4.png'/>}
                                {e.towel === 'recommended' && <Icon src='../images/icon5.png'/>}
                                {e.fountain === 'partial' && <Icon src='../images/icon6.png'/>}
                                {e.fountain === 'not_allowed' && <Icon src='../images/icon7.png'/>}
                                {e.locker_room === 'allowed' && <Icon src='../images/icon8.png'/>}
                                {e.locker_room === 'partial' && <Icon src='../images/icon9.png'/>}
                                {e.locker_room === 'closed' && <Icon src='../images/icon.png'/>}
                                <div>
                                    { e.schedules &&
                                        <Horario>
                                            <div>
                                                <h3>{e.schedules[0].weekdays }</h3>
                                                <p>{e.schedules[0].hour }</p>
                                            </div>
                                            <div>
                                                <h3>{e.schedules[1].weekdays }</h3>
                                                <p>{e.schedules[1].hour }</p>
                                            </div>
                                            <div>
                                                <h3>{e.schedules[2].weekdays }</h3>
                                                <p>{e.schedules[2].hour }</p>
                                            </div>
                                            <div>
                                                <h3>{e.schedules[3]?.weekdays }</h3>
                                                <p>{e.schedules[3]?.hour }</p>
                                            </div>                                                  
                                        </Horario>
                                    }
                                </div>
                            </div>
                        }
                    </Item>

            ))
            }</Card>
    )
}