import logo from "../../assets/hyggex.png"

const Navigation = () => {
    return <nav className="w-screen">
        <div className="w-10/12 m-auto flex justify-between items-center h-20 ">
            <div className="">
                <div className="h-6">
                    <img className="w-full h-full" src={logo} alt="Hyggex" />
                </div>
            </div>
            <div className="text-sm">
                <ul className="flex gap-6 items-center">
                    {[ 'Home','Flashcard','Contact','FAQ' ].map( link => (
                        <li><a className="cursor-pointer font-medium text-slate-600 hover:text-black">{link}</a></li>
                    ))}
                    <li>
                        <button className="bg-gradient-to-b from-blue-950 to-blue-600 text-white px-8 py-2 rounded-full">Login</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navigation;