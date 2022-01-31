import { useState } from 'react';
import useAppData from '../dados/hook/useAppData'

function RequisicaoDeId() {

    const dados = useAppData()

    const [pokeId, setPokeid] = useState(0)

    return (
        <div className="flex flex-col justify-center items-center py-3 px-5">
            <p className="text-xl font-sans font-semibold text-center mb-2">Enter the Pokémon ID between 1 and 898</p>
            <div className="flex items-center justify-evenly">
                <input onChange={(e) => setPokeid(+e.target.value)} type="number" max={898} min={1} size={3} className="bg-white border-orange-700 border-solid border-4 rounded-full w-20 p-1 text-teal-800 text-3xl mx-2 text-center font-bold appearance-none focus:outline-none" />
                <button onClick={() => {
                    if (pokeId <= 0 || pokeId > 898) {
                        alert('O ID é inválido')
                    } else { dados.setarId(pokeId) }
                }} className="text-white bg-orange-500 p-2 rounded-full mx-2 font-semibold hover:bg-orange-800" >Buscar!</button>
            </div>
        </div>
    )
}

export default RequisicaoDeId;
