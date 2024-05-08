import BottomIcon from "../../assets/icons/bottom";

const Faq = () => {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-blue-900 my-10">FAQ</h1>
            <div className="flex flex-col gap-5">
                {[ "Can education flashcards be used for all age groups?",
                "How do education flashcards work?",
                "Can education flashcards be used for test preparation?"
                ].map(link => (
                    <div className="cursor-pointer px-4 py-3 border-blue-700 border-2 rounded-lg max-w-full w-[50em] flex justify-between items-center">
                        {link}
                        <BottomIcon/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq;