import { useState } from "react"
import Bottom from "./bottom"
import Card from "./card"
import Interface from "./interface"
import Tabs from "./tabs"

const Hero = () => {

    const expressions = [
        "10 + 5x - 4x + 4",
        "8 + 7x - 3x - 2",
        "11 + 4x - 1x - 2",
        "12 + 3x - 2x - 4",
        "7 + 8x - 5x - 1",
        "6 + 9x - 6x - 2",
        "13 + 2x - 1x - 5",
        "5 + 10x - 7x - 3",
        "14 + x - 3x - 6",
        "15 - x + 5x - 7"
    ];

    const [index, setIndex] = useState<number>(0);
    

    return (
        <div className="w-10/12 m-auto">
            <h1 className="text-3xl font-bold text-blue-900 my-10">Relations and Functions ( Mathematics )</h1>
            <Tabs/>
            <Card expression={expressions[index]}/>
            <Interface 
                previous={() => setIndex(p => p !== 0 ? (p - 1) % 10 : p)}
                next={() => setIndex( p => p !== 9 ? (p + 1) % 10 : p)}
                number={(index + 1).toString()}
            />
            <Bottom/>
        </div>
    )
}

export default Hero