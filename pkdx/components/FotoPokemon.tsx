import useAppData from "../dados/hook/useAppData";
import Image from "next/image";

const FotoPokemon = (props: any) => {
    const dados = useAppData()

    return (
        <div className="flex items-center justify-center h-full m-4 bg-blue-100">
            {props.children}
        </div>
    )
};

export default FotoPokemon;
