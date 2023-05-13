import { Link } from "react-router-dom";

export const MyProjects = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      };
    return (<>
        <div className="text-2xl text-secondary text-center"><p>swipe to see more!</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg>
</div>
        
        <div className="carousel carousel-center w-3/4 mx-auto">

            <div className="carousel-item flex flex-col w-full h-full">
                <h1 className="text-3xl text-secondary ">white rabbit.</h1>
                <div className="flex flex-col md:flex-row text-secondary">
                    <img src="../images/whiterabbit.png" className="w-full md:w-[80%] h-full border border-6" />
                    <div className="flex flex-col p-2">
                        <p className="text-sm">White Rabbit is a single page CRUD
                            app built using ReactS. It is designed
                            to educate the novice wine user on
                            unfamiliar wine, and uses algorithms
                            to suggest wines based on the user's
                            selected favorite wines. This project also incorporated Tailwind, Cloudinary, Leaflet, and other UI libraries.</p>
                        <Link href="#" onClick={() => openInNewTab("https://github.com/visionfiller/white-rabbit") } className=" m-2 text-center w-full h-6 bg-secondary rounded-lg font-semibold text-white">GitHub</Link>
                        <Link href="#" onClick={() => openInNewTab("https:/white-rabbit.live") } className=" m-2 text-center w-full h-6 bg-secondary rounded-lg font-semibold text-white">Deployed Site</Link>
    
                    </div>
                </div>
            </div>

            <div className="carousel-item flex flex-col w-full h-full">
                <h1 className="text-3xl text-secondary lowercase ">Thorns and Roses</h1>
                <div className="flex flex-col md:flex-row text-secondary">
                    <img src="../images/thorns.png" className="w-full h-full md:w-[80%] border border-6" />
                    <div className="flex flex-col p-4">
                        <p className="text-sm">Thorns and Roses is an entry level team project into ReactJs. The goal of this project was the gain a better understanding of useState and useEffects, as well as foreign complex database relationships.</p>
                        <Link href="#" onClick={() => openInNewTab("https://github.com/nss-day-cohort-62/thorns-roses-team-rocket-1") }className=" m-2 text-center w-full h-6 bg-secondary rounded-lg font-semibold text-white">GitHub</Link>

                    </div>
                </div>
            </div>

            <div className="carousel-item flex flex-col w-full">
                <h1 className="text-3xl text-secondary lowercase ">Holiday Road</h1>
                <div className="flex flex-col md:flex-row text-secondary">
                    <img src="../images/holiday.png" className="w-full h-full object-cover md:w-[80%] border border-6" />
                    <div className="flex flex-col p-4">
                        <p className="text-sm">As a team group project through NSS, this was a website that was originally built using Vanilla Javascript, and refactored using ReactJS. Working together as a team, we
                            collaborated and combined
                            knowledge and skills to build this
                            app using public APIs, Ul libraries,
                            and npm packages.</p>
                        <Link href="#" onClick={() => openInNewTab("https://github.com/nss-day-cohort-62/holiday-road-react-team-rocket") }className=" m-2 text-center w-full h-6 bg-secondary rounded-lg font-semibold text-white">GitHub</Link>

                    </div>
                </div>
            </div>




        </div>
    </>)
}