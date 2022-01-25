import React from 'react';

function QuadroBranco(props: any) {
    return <div className='bg-white h-full w-full m-2 rounded-md flex flex-col drop-shadow-xl'>
        {props.children}
    </div>;
}

export default QuadroBranco;
