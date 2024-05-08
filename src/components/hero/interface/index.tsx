import FullScreen from "../../../assets/icons/fullscreen";
import GoLeft from "../../../assets/icons/goleft";
import GoRight from "../../../assets/icons/goright";
import Replay from "../../../assets/icons/replay";

const Interface = ({ previous, next, number }: { previous?: () => void, next?: () => void, number: string }) => {
    return (
        <div className="flex justify-between items-center px-7 max-w-full w-[30em] m-auto">
            <Replay/>
            <div className="flex items-center gap-8 font-semibold">
                <button className="cursor-pointer" onClick={previous}>
                    <GoLeft/>
                </button>
                {number.padStart(2, '0')}/10
                <button className="cursor-pointer" onClick={next}>
                    <GoRight/>
                </button>
            </div>
            <FullScreen/>
        </div>
    )
}

export default Interface;