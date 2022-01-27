import React from 'react';

const Main = (props: any) => {
    return <div className='
    flex flex-col p-10 w-full h-full bg-orange-500 items-center
    sm:flex-col 
    '>
        {props.children}
    </div>;
};

export default Main;
