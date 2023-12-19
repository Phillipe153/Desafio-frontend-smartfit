
// import { createContext } from 'react';

// const SamrtFitContext = createContext({});

// export default SamrtFitContext;

"use client"

import { createContext, ReactNode, useState } from "react";

import propTypes from 'prop-types';


export const SamrtFitContext = createContext({
    horario: 'te',
    setHorario: (value: string) => {},
    // checkedManha: false,
    // setCheckedManha: (value: boolean) => {},
    // checkedTarde: false,
    // setCheckedTarde: (value: boolean) => {},
    // checkedNoite: false,
    // setCheckedNoite: (value: boolean) => {},
})


interface ProviderProps {
    children: ReactNode
}



export function SamrtFitProvider({children}: ProviderProps) {
    const [horario, setHorario] = useState('');
    // const [checkedManha, setCheckedManha] = useState(false);
    // const [checkedTarde, setCheckedTarde] = useState(false);
    // const [checkedNoite, setCheckedNoite] = useState(false);



    const context = {
        horario,
        setHorario,
        // checkedManha,
        // setCheckedManha,
        // checkedTarde,
        // setCheckedTarde,
        // checkedNoite,
        // setCheckedNoite,
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