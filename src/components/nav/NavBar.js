import { Link } from "react-router-dom"

export const NavBar = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      };
    return(<>
    <div className="flex row">
    <img className="w-[10%]" src="../images/vf.png"/>
    <ul className="flex row justify-end gap-24 pr-10 p-4 text-secondary w-full items-start">
      
        <li className="hover:text-third"><Link  to={"/home"}>home</Link></li>
        <li className="hover:text-third"><Link to={"/about"}>about me</Link></li>
        <li className="hover:text-third"><Link to={"/resume"}>resume</Link></li>
        <li className="hover:text-third"><Link to={"/projects"}>my projects</Link></li>
        <button onClick={() => window.location = 'mailto:visionfiller@gmail.com'}>hire me!</button>
    </ul>
   
    </div>

    <div className="bg-secondary fixed bottom-0 w-full h-10 flex row justify-evenly items-center text-white">
        
    <button className="text-sm font-light hover:text-third" onClick={() => window.location = 'mailto:visionfiller@gmail.com'}>visionfiller@gmail.com</button>
            <div className="text-sm font-light">832.788.1486</div>
         <div className="flex row justify-evenly gap-16 p-1  text-slate-600 items-center">
        <Link href="#" onClick={() => openInNewTab("https://github.com/visionfiller")}><img className="h-8 w-8 p-1 transform hover:scale-125  transition ease-out duration-300" src="https://cdn.onlinewebfonts.com/svg/img_415633.png"/></Link>
        <Link href="#" onClick={() => openInNewTab("https://www.instagram.com/visionfiller/")}><img className="h-10 w-10 p-1 transform hover:scale-125  transition ease-out duration-300" src="https://webstockreview.net/images/instagram-clipart-black-and-white-15.png"/></Link>
        <Link href="#" onClick={() => openInNewTab("https://www.linkedin.com/in/visionfiller/")}> <img className="h-8 w-8 p-1 transform hover:scale-125  transition ease-out duration-300" src="https://www.pinclipart.com/picdir/big/141-1417157_linkedin-icon-for-resume-i-see-you-re.png"/></Link>
      
    </div>

    </div>
    </>)
}