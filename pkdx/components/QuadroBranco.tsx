import React from 'react';

function QuadroBranco(props: any) {
    return <div className='
    bg-white h-full w-full m-2 rounded-md flex flex-col drop-shadow-xl
    sm:w-4/5
    '>
        {props.children}
    </div>;
}

export default QuadroBranco;
