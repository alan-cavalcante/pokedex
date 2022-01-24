import React from 'react';

function QuadroPrincipal(props: any) {
    return <div className='bg-white h-full w-full m-2 rounded-md flex flex-col'>
        {props.children}
    </div>;
}

export default QuadroPrincipal;
