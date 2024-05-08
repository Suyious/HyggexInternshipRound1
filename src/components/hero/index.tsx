import Faq from "../faq"
import Bottom from "./bottom"
import Card from "./card"
import Interface from "./interface"
import Tabs from "./tabs"

const Hero = () => {
    return (
        <div className="w-10/12 m-auto">
            <h1 className="text-3xl font-bold text-blue-900 my-10">Relations and Functions ( Mathematics )</h1>
            <Tabs/>
            <Card/>
            <Interface/>
            <Bottom/>
            <Faq/>
            {/* Spacing */}
            <div className="h-96"></div>
        </div>
    )
}

export default Hero