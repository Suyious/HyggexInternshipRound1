import HomeIcon from "../../assets/icons/home";
import LeftIcon from "../../assets/icons/left";

const Path = () => {
    return (
        <div className="flex items-center gap-3 w-10/12 m-auto">
            <HomeIcon/>            
            {['Flashcard', 'Mathematics', 'Relation and Function'].map((link, i) => (
                <a className={`flex gap-3 items-center text-sm font-medium ${ i !== 2 ? 'text-slate-500': 'text-slate-950'}`}><LeftIcon/><p>{link}</p></a>
            ))}
        </div>
    )
}

export default Path;