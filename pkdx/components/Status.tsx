

const Status = (props: any) => {
    
    return (
        <div className="flex flex-col">
            <div className="text-5xl flex flex-col items-center justify-center p-5 font-bold bg-orange-100 text-blue-500">
                {props.nomeDoPokemon}
            </div>
            <div className="text-5xl flex items-center justify-center p-5 font-light text-black">
                <p className="font-bold mr-2">HP: </p>
                {props.HPDoPokemon}
            </div>
            <div className="text-5xl flex items-center justify-center p-5 font-light text-black">
                <p className="font-bold mr-2">Ataque: </p>
                {props.AtaqueDoPokemon}
            </div>
            <div className="text-5xl flex items-center justify-center p-5 font-light text-black">
                <p className="font-bold mr-2">Tipo: </p>
                {props.TipoDoPokemon}
            </div>

        </div>
    );
};

export default Status;
