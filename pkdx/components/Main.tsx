import React from 'react';

const Main = (props: any) => {
    return <div className='flex bg-orange-500 p-10 h-2/3 '>
        {props.children}
    </div>;
};

export default Main;
