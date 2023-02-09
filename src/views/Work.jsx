import IFrame from '../components/IFrame'
export default () => {
    return (
        <section className="w-screen h-screen bg-purple-500 flex justify-center items-center">
            <div className="flex flex-wrap items-stretch justify-around h-4/5  p-4 lg:w-2/3 md:w-2/3 w-5/6 shadow-xl border border-purple-600 rounded bg-purple-">
                <div className="lg:h-2/5 md:h-2/5 h-40 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full p-2 shadow-md">
                    <IFrame img="/src/assets/images/gva.jpg" />
                </div>
                <div className="lg:h-2/5 md:h-2/5 h-40 lg:w-1/3 md:w-1/3 sm:w-2/3 w-full p-2 shadow-md">
                    <IFrame img="/src/assets/images/Lahore.jpg" />
                </div>
                <div className="lg:h-3/5 md:h-3/5 h-40 sm:w-2/3 w-full p-2 shadow-md">
                    <IFrame img="/src/assets/images/Portfolio.svg" />
                </div>
            </div>
        </section>
    )
}