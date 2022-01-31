const Main = (props: any) => {
    return <div className='
    flex flex-col p-10 w-full h-fit grow bg-orange-500 items-center justify-center
    '>
        {props.children}
    </div>;
};

export default Main;
