import { setHttpAgentOptions } from 'next/dist/server/config'
import { createContext, useState } from 'react'


// Essa interface determina as propriedades do Objeto/Contexto que será distribuido para toda a aplicação.
interface AppContextProps {
  nome?: string,
  hp?: number,
  ataque?: number,
  tipo?: string,
  tipo2?: string | void,
  id?:number,
  foto?: any,
  setarId: (e: number) => any
}

// Esse é o Objeto/Contexto
const AppContext = createContext<AppContextProps>({
  setarId: (e: number) => e
})

//IMPLANTAR A CHAMADA

export function AppProvider(props: any) {

  const chamarAPI = (id: number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(pokemon => {
        const stats = pokemon.stats
        setHp(stats[0].base_stat)
        setAtaque(stats[1].base_stat)
        const name = pokemon.name.toUpperCase()
        setNome(name)
        const type = pokemon.types
        // console.log(type)
        setTipo(type[0].type.name)
        type[1] ? setTipo2(type[1].type.name) : setTipo2('')
        const foto = pokemon.sprites.front_default
        console.log(foto)
        setFoto(foto)
      })
  }

  const [nome, setNome] = useState('')
  const [hp, setHp] = useState(0)
  const [ataque, setAtaque] = useState(0)
  const [tipo, setTipo] = useState('')
  const [tipo2, setTipo2] = useState('')
  const [id, setId] = useState()
  const [foto, setFoto] = useState('')

  function setarId(e: any) {
    // console.log(e)
    setId(e)
    chamarAPI(e)
  }

  return (
    <AppContext.Provider value={{
      nome,
      hp,
      ataque,
      tipo,
      tipo2,
      foto,
      id,
      setarId
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;
