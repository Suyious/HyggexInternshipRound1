import Bulb from "../../../assets/icons/bulb";
import Sound from "../../../assets/icons/sound";

const Card = () => {
    return (
        <div className="max-w-full w-[30em] m-auto my-6 h-72 bg-gradient-to-tr flex justify-center items-center relative from-blue-500 to-blue-950 rounded-3xl">
            <div className="flex justify-between absolute w-full p-5 top-0 left-0">
                <Bulb/>
                <Sound/>
            </div>
            <div className="text-white text-xl font-semibold">
                9 + 6 + 7x - 2x - 3
            </div>
        </div>
    )
}

export default Card;