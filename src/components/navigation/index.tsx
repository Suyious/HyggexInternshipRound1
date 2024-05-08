import { useState } from "react";
import logo from "../../assets/hyggex.png"
import MenuIcon from "../../assets/icons/menu";

const Navigation = () => {

    const [navOpen, setNavOpen] = useState<boolean>(false);

    return <nav>
        <div className="w-10/12 m-auto flex justify-between items-center h-20 ">
            <div className="">
                <div className="h-6">
                    <img className="w-full h-full" src={logo} alt="Hyggex" />
                </div>
            </div>
            <div className="text-sm">
                <ul className="gap-6 items-center flex">
                    {[ 'Home','Flashcard','Contact','FAQ' ].map( link => (
                        <li><a className="hidden md:block cursor-pointer font-medium text-slate-600 hover:text-black">{link}</a></li>
                    ))}
                    <div className="cursor-pointer md:hidden" onClick={() => setNavOpen((p) => !p)}>
                        <MenuIcon/>
                    </div>
                    <li>
                        <button className="bg-gradient-to-b from-blue-950 to-blue-600 text-white px-8 py-2 rounded-full">Login</button>
                    </li>
                </ul>
            </div>
        </div>
        <ul className={`md:hidden overflow-hidden transition-[height] ${navOpen ? 'h-[8em]':'h-0'}`}>
            {['Home', 'Flashcard', 'Contact', 'FAQ'].map(link => (
                <li><a className="cursor-pointer block w-10/12 text-sm m-auto py-1 px-2 font-medium text-slate-600 hover:text-black hover:bg-slate-200">{link}</a></li>
            ))}
        </ul>
    </nav>
}

export default Navigation;