function RequisicaoDeId() {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <p className="text-xl font-sans font-semibold text-center">Digite o ID do Pokemon entre 1 e 898</p>
            <input type="number" max={898} min={1} size={3} className="bg-orange-400 rounded-full w-18 p-1 mt-5 text-white text-3xl text-center font-bold appearance-none" />
        </div>
    )
}

export default RequisicaoDeId;
