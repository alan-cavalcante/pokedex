import { createContext, useState } from 'react'


// Essa interface determina as propriedades do Objeto/Contexto que será distribuido para toda a aplicação.
interface AppContextProps {
  nomeDoPokemon?: string,
  hpDoPokemon?: number,
  ataqueDoPokemon?: number,
  tipoDoPokemon?: string,
  setarId: (e: number) => any
}

// Esse é o Objeto/Contexto
const AppContext = createContext<AppContextProps>({
  setarId: (e:number) => e
})

function setarId(e:any) {
  console.log(e)
}
//IMPLANTAR A CHAMADA
fetch('https://pokeapi.co/api/v2/pokemon?limit=150')

export function AppProvider(props: any) {


  return (
    <AppContext.Provider value={{
      nomeDoPokemon: 'Bulbassauro',
      hpDoPokemon: 30,
      ataqueDoPokemon: 10,
      tipoDoPokemon: 'Folha',
      setarId
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;
