export const MyProjects = () => {
    return <>
        <div className="text-2xl text-secondary text-center">swipe to see more! <p className="text-4xl font-bold">>>></p></div>
        
        <div className="carousel carousel-center w-3/4 mx-auto">

            <div className="carousel-item flex flex-col w-full">
                <h1 className="text-3xl text-secondary ">white rabbit.</h1>
                <div className="flex row text-secondary">
                    <img src="../images/whiterabbit.png" className="object-contain w-[80%] h-full border border-6" />
                    <div className="flex flex-col p-2">
                        <p className="text-sm">White Rabbit is a single page CRUD
                            app built using ReactS. It is designed
                            to educate the novice wine user on
                            unfamiliar wine, and uses algorithms
                            to suggest wines based on the user's
                            selected favorite wines. This project also incorporated Tailwind, Cloudinary, Leaflet, and other UI libraries.</p>
                        <btn className=" m-2 text-center w-full h-6 bg-secondary rounded-lg font-semibold text-white">GitHub</btn>
                        <btn className="m-2 text-center w-full h-6  bg-secondary rounded-lg font-semibold text-white">Visit</btn>
                    </div>
                </div>
            </div>

            <div className="carousel-item flex flex-col w-full">
                <h1 className="text-3xl text-secondary lowercase ">Thorns and Roses</h1>
                <div className="flex row text-secondary">
                    <img src="../images/thorns.png" className="w-[80%] border border-6" />
                    <div className="flex flex-col p-4">
                        <p className="text-sm">Thorns and Roses is an entry level project into ReactJs. The goal of this project was the gain a better understanding of useState and useEffects, as well as foreign complex database relationships.</p>
                        <btn className=" m-2 text-center w-full h-6 bg-secondary rounded-lg font-semibold text-white">GitHub</btn>

                    </div>
                </div>
            </div>

            <div className="carousel-item flex flex-col w-full">
                <h1 className="text-3xl text-secondary lowercase ">Holiday Road</h1>
                <div className="flex row text-secondary">
                    <img src="../images/holiday.png" className="w-[80%] border border-6" />
                    <div className="flex flex-col p-4">
                        <p className="text-sm">As a team group project through NSS, this was a website that was originally built using Vanilla Javascript, and refactored using ReactJS. Working together as a team, we
                            collaborated and combined
                            knowledge and skills to build this
                            app using public APIs, Ul libraries,
                            and npm packages.</p>
                        <btn className=" m-2 text-center w-full h-6 bg-secondary rounded-lg font-semibold text-white">GitHub</btn>

                    </div>
                </div>
            </div>




        </div>
    </>
}