const Main = (props: any) => {
    return <div className='
    flex flex-col p-10 w-full h-full bg-orange-500 items-center justify-center
    '>
        {props.children}
    </div>;
};

export default Main;
