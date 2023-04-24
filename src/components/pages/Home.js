export const HomePage = () => {
    return (<>
    <div className=" pt-16 flex row justify-between mx-auto w-full h-full text-center">
        <div className="w-1/2 my-auto text-secondary text-right">
            <div className="text-2xl">hello!</div>
            <div>you can call me...</div>
            <div className="text-6xl font-extrabold">Vision</div>
            <p>I'm a full stack software developer based in Nashville with a love for puzzles, gardening, and seeing the world. I love building things from the ground up, and watching things grow and develop.</p>
        </div>
        <div className="w-1/2 h-full mx-auto">
            <img className="w-1/2 h-full object-contain mx-auto" src="../images/me.jpeg" />
        </div>
    </div>
</>)
}         