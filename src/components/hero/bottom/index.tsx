import Plus from "../../../assets/icons/plus";
import logo from "../../../assets/logo.png"
import text from "../../../assets/logotext.png"

const Bottom = () => {
    return (
        <div className="flex justify-between w-full my-10">
            <div className="flex gap-5 items-center">
                <div className="flex justify-center items-center rounded-full w-[4em] h-[4em] shadow-[0_0_31px_rgba(8,56,153,0.4)]">
                    <img className="w-[2em] h-auto" src={logo} alt="hyggex" />
                </div>
                <div>
                    <div className="text-xs">Published by</div>
                    <img className="w-[6em]" src={text} alt="hyggex" />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <Plus />
                <div className="text-blue-800 text-lg font-semibold"> Create Flashcard </div>
            </div>
        </div>
    )
}

export default Bottom;