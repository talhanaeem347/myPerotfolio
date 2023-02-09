import Card from "../components/Card"
const cards = [
    {
        id: 1,
        image: "data:image/jpeg;base64,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",
        title: "React",
        text: "Reuseable components make scalable web apps with React and Vite. "
    },
    {
        id: 2,
        image: "https://miro.medium.com/max/1400/1*C8xdSMN_IkeXDsTLt6EACA.png",
        title: "Vue",
        text: "Dealing with all libraries and frameworks like pain and vue-router"
    },
    {
        id: 3,
        image: "data:image/jpeg;base64,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",
        title: "Tailwind CSS",
        text: "Design and build responsive websites faster with Tailwind CSS,",
    },
    {
        id: 4,
        image: "data:image/jpeg;base64,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",
        title: "Bootstrap",
        text: "Dealing with all bootstrap libraries and plugins",
    },
    {
        id: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmc0d569q9RA0U8sk7C4g5aIYH1M5g8Adhw&usqp=CAU",
        title: "JavaScript",
        text: "I can Design web apps With different framworks and Vanala Javascript"
    },
    {
        id: 6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTT7l7X8v9nVOdDEe6HMr_URDYKddS1M4S6w&usqp=CAU",
        title: "TypeScript",
        text: "TypeScript is a typed superset of JavaScript and I can use it to build a web application.",
    },
]
export default () => {
    return (
        <section className="w-screen min-h-screen flex items-center justify-center bg-red-300 py-4">
            <div className="flex flex-wrap px-2 py-4 shadow-lg border border-red-400 w-4/5 h-4/5 ">
            {cards.map((card, index) => {
                return (
                    <div key={index}     className=" p-2 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full  ">
                        <div className="shadow-lg m-2 h-full ">
                        <Card key={index} img= {card.image} title={card.title} text={card.text} />
                        </div>
                    </div>
                )
            })}
            </div>
        </section>
    )
}