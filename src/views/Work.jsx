import IFrame from "../components/IFrame";
export default () => {
  return (
    <section className="w-screen lg:h-screen md:h-screen h-full bg-blue-100 flex justify-center p-4 items-center lg:p-10 md:p-10">
      <div className="h-full w-full bg-red-100 rounded ">
        <h1 className="text-3xl font-bold text-center mt-2 " >Work</h1>
        <div className="flex flex-wrap items-stretch justify-around s/6  p-4  ">
          <div className="lg:h-1/2 md:h-1/2 h-40 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full p-4 shadow-md">
            <IFrame img="/images/gva.jpg" />
          </div>
          <div className="lg:h-1/2 md:h-1/2 h-40 lg:w-1/3 md:w-1/3 sm:w-2/3 w-full p-4 shadow-md">
            <IFrame img="/images/Lahore.jpg" />
          </div>
          <div className="lg:h-2/5 md:h-1/2 h-40 lg:w-1/3 md:w-1/3 sm:w-2/3 w-full p-4 flex justify-center items-center  shadow-md">
            <IFrame img="/images/shoue.jpg" />
          </div>
          <div className="lg:h-1/2 md:h-1/2 h-140 sm:w-2/3 w-full p-4 shadow-md">
            <IFrame img="/images/Portfolio.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};
