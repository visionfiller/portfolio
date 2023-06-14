
export const AboutMe = () => {




    return (<>

        <div className="bg-white w-full overflow-x-hidden ">
            <div className="mx-auto p-10 max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-2xl font-semibold leading-8 text-secondary">my skills.</h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://th.bing.com/th/id/OIP.a_wOSqpiu-wR6KEOKE1E0wAAAA?pid=ImgDet&rs=1" alt="React" width="158" height="48" />
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://th.bing.com/th/id/OIP.ViV1OEesGeL1Qcjvf0HhJgHaIB?pid=ImgDet&rs=1" alt="Javascript" width="158" height="48" />
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://pluspng.com/img-png/python-logo-png-python-logo-png-and-vector-logo-img-4096x4553.png" alt="Python" width="158" height="48" />
                    <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://th.bing.com/th/id/R.db767259a291c24ce95816fac91fdd94?rik=kQB%2f1TD%2f9BEjtQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cz%2f6gL%2f9cz6gLroi.png&ehk=6Q%2bn5zCIoyy3DiO9p3QBoznEtfrqUV8tTSU4r6kWw%2bM%3d&risl=&pid=ImgRaw&r=0" alt="SQL" width="158" height="48" />
                    <img className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://dkrn4sk0rn31v.cloudfront.net/2019/02/06111419/1200px-Django_logo.svg.png" alt="Django" width="158" height="48" />
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://th.bing.com/th/id/OIP.S-SYtYzIhgPRnmRd8yWH4gAAAA?pid=ImgDet&rs=1" alt="Tailwind" width="158" height="48" />
                    <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://jquery-plugins.net/image/plugin/chakra-ui-simple-modular-accessible-ui-components-for-react-applications.png" alt="Tailwind" width="158" height="48" />

                </div>
            </div>
        </div>
        <div className="border-b-2 border-secondary w-2/3 mx-auto m-10"></div>
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-2xl font-semibold leading-8 text-secondary">my education.</h2>
                <div className="mx-auto mt-10 flex flex-col md:flex-row">
                    <div className="flex flex-col h-full w-full text-sm">
                    <img className=" max-h-24  object-contain " src="https://2020.pytennessee.org/static/img/sponsors/nss.png" alt="NSS" width="158" height="48" />
                    <p className="text-secondary p-4">January 2023 - June 2023</p>
                    <p className="text-secondary p-4">Full Stack Software Development</p>
                    </div>
                    <p className="p-4 md:p-10">My journey as a software developer started back in January 2023, when I stumbled upon NSS's web development jumpstart. Ever since then, I've been hooked on coding! Learning new programming concepts and languages is something I look forward to every day. It's challenging, but I enjoy the feeling of satisfaction when I finally figure out a tough piece of code. This program has really changed the way I learn and has made me crave new knowledge about software development.
                    </p>
                </div>
                <div className="mx-auto mt-10 flex flex-col md:flex-row ">
                <div className="flex flex-col h-full w-full text-sm">
                    <img className=" max-h-24  object-contain " src="https://i.pinimg.com/originals/bb/d0/62/bbd062fccffea2cd18db02b37a72136a.jpg" alt="CU" width="158" height="48" />
                    <p className="text-secondary p-4">August 2008 - May 2012</p>
                    <p className="text-secondary p-4">Bachelor of Arts and Science in International Affairs</p>
                    </div>
                    <p className="p-4 md:p-10">When I was in college, I was captivated by international affairs and history. I had an insatiable curiosity about politics and the underlying reasons for why things played out the way they did. Learning about the past and how it shapes our future was something that really sparked my interest. Little did I know, my background in international affairs would also fuel my passion for software development! It taught me to approach problems with a critical eye, to analyze why something was happening, and to come up with innovative solutions to address the issue.
                    </p>
                </div>
            </div>
        </div>
        <div className="border-b-2 border-secondary w-2/3 mx-auto m-10"></div>

        <div className="bg-white w-full pb-16 px-4 md:px-16">
            <div className="mx-auto lg:px-8">
                <h2 className="text-center text-2xl font-semibold leading-8 text-secondary">me.</h2>
                <p className="p-4 md:p-8">When I'm not coding, I'm always on the lookout for new culinary experiences, whipping up delicious dishes in the kitchen, or tending to my garden. There's something incredibly satisfying about creating something beautiful from a tiny seed, which is where my love of coding and creating really intersects. I currently live in Nashville with my boyfriend Wesley, who's also a developer, and our two-year-old dog-child, Poppy. We're always seeking out new adventures, exploring the great outdoors, and discovering new places to visit. I absolutely adore spring because of the beautiful transformation that takes place throughout the city with green trees and vibrant flowers in bloom. It's a time for new beginnings, new life, and people enjoying the fresh air (although the pesky pollen can be a bit of a downer).</p>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
            <div className="carousel w-1/2 h-1/2 mx-auto">
                <div id="item1" className="carousel-item w-full h-full object-contain">
                    <img src="../images/hiking.jpeg" className="w-full h-full" />
                </div>
                <div id="item2" className="carousel-item w-full h-full object-contain">
                    <img src="../images/baby.jpeg" className="w-full h-full" />
                </div>
                <div id="item3" className="carousel-item w-full h-full object-contain">
                    <img src="../images/hawaii.jpeg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full h-full object-contain">
                    <img src="../images/beach.jpeg" className="w-full" />
                </div>
            </div>
            








        </div>
    </>)
}