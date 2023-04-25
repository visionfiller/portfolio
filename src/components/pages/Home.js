export const HomePage = () => {
    return (<>
    <div className=" pt-16 flex flex-col md:flex-row justify-between mx-auto w-full h-full text-center">
        <div className="w-full md:w-1/2 my-auto text-secondary text-center md:text-right">
            <div className="text-6xl text-center p-8">print('hello!')</div>
            <div className="flex row justify-end gap-3 items-baseline p-4">
            <div className="text-xl font-extralight">my name is </div>
            <div className="text-2xl md:text-4xl font-extrabold">Vision</div>
            </div>
            <p className="p-4">I'm a full stack software developer based in Nashville with a love for puzzles, gardening, and seeing the world. I love building things from the ground up, and watching things grow and develop.</p>
        </div>
        <div className="w-full md:w-1/2 h-full mx-auto">
            <img className="w-1/2 h-full object-contain mx-auto" src="../images/me.jpeg" />
        </div>
    </div>
</>)
}         