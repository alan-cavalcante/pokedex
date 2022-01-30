import React from 'react';

function QuadroBranco(props: any) {
    return <div className='
    bg-white h-full m-2 rounded-md flex flex-col drop-shadow-xl
    sm:w-fit md:h-fit 
    '>
        {props.children}
    </div>;
}

export default QuadroBranco;
