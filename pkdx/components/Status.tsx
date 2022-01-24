const Status = (props: any) => {
    return (
        <div className="flex flex-col">
            <div className="text-5xl flex flex-col items-center justify-center p-5 font-bold bg-blue-900 text-white">
                {props.nomeDoPokemon}
            </div>
            <div className="text-5xl flex flex-col items-center justify-center p-5 font-light text-black">
                HP: {props.HPDoPokemon}
            </div>
            <div className="text-5xl flex flex-col items-center justify-center p-5 font-light text-black">
                Ataque: {props.AtaqueDoPokemon}
            </div>
            <div className="text-5xl flex flex-col items-center justify-center p-5 font-light text-black">
                Tipo: {props.TipoDoPokemon}
            </div>

        </div>
    );
};

export default Status;
