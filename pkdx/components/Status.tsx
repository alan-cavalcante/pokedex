const Status = (props: any) => {
    
    return (
        <div className="flex flex-col text-center">
            <div className="text-4xl flex flex-col items-center justify-center p-5 font-bold bg-orange-100 text-blue-800">
                {props.nomeDoPokemon}
            </div>
            <div className="text-2xl flex items-center justify-center p-2 font-light text-black">
                <p className="font-bold mr-2">Base HP: </p>
                {props.HPDoPokemon}
            </div>
            <div className="text-2xl flex items-center justify-center p-2 font-light text-black">
                <p className="font-bold mr-2">Base Attack: </p>
                {props.AtaqueDoPokemon}
            </div>
            <div className="text-2xl flex items-center justify-center p-3 font-light text-black">
                <p className="font-bold mr-0">Type: </p>
                <div className="flex text-md items-center justify-center align-middle p-1">
                {props.TipoDoPokemon.toUpperCase()} {props.TipoDoPokemon2?.toUpperCase()}
                </div>
            </div>

        </div>
    );
};

export default Status;
