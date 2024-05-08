import FullScreen from "../../../assets/icons/fullscreen";
import GoLeft from "../../../assets/icons/goleft";
import GoRight from "../../../assets/icons/goright";
import Replay from "../../../assets/icons/replay";

const Interface = () => {
    return (
        <div className="flex items-center px-7 gap-28 w-max m-auto">
            <Replay/>
            <div className="flex items-center gap-8 font-semibold">
                <GoLeft/>
                01/10
                <GoRight/>
            </div>
            <FullScreen/>
        </div>
    )
}

export default Interface;