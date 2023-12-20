
// import { createContext } from 'react';

// const SamrtFitContext = createContext({});

// export default SamrtFitContext;

"use client"

import { createContext, ReactNode, useState, useEffect } from "react";

import propTypes from 'prop-types';
import getUnidades from "@/service/getUnidades";
import { Unidades } from "@/interface/unidades";



export const SamrtFitContext = createContext({
    horario: '',
    setHorario: (value: string) => {},
    unidades: [],
    setUnidades: (value: Unidades) => {},
    fechadas: false,
    setFechadas    : (value: boolean) => {}
})


interface ProviderProps {
    children: ReactNode
}



export function SamrtFitProvider({children}: ProviderProps) {
    const [horario, setHorario] = useState('');
    const [unidades, setUnidades] = useState([]);
    const [fechadas, setFechadas] = useState(false);

    useEffect(() => {
        getUnidades().then((response) => {
            setUnidades(response)
        })
    }, []);



    const context = {
        horario,
        setHorario,
        unidades,
        setUnidades,
        fechadas,
        setFechadas
        
    }


    return(
        <SamrtFitContext.Provider value ={context}>
            {children}
        </SamrtFitContext.Provider>
    )
}

SamrtFitProvider.propTypes = {
    children: propTypes.node.isRequired,
  };