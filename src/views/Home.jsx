import { Splide, SplideSlide } from "@splidejs/react-splide";

export default () => {
  const bgs = [
    {
      id: 1,
      url: "https://img.rawpixel.com/private/static/images/website/2022-05/rm422-076-x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e877fedea1136b8c616786d383ed70c3",
      title: "Hi! ",
      subTitle: "welcom to my Protfolio",
      text: "I'm available to Desig and Modify your Web Apps.",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/1366475366/photo/artificial-intelligence-digital-concept-abstract-brains-inside-light-bulb.jpg?s=612x612&w=0&k=20&c=kiZ-IyL9xOej1ttlw268MTL72OyagiVZm5ojHmODX9U=",
      title: "",
      subTitle: "I can Design. What you Think.",
      text: "",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/1182956228/photo/abstract-3d-background.jpg?s=612x612&w=0&k=20&c=yrcU9OdCz6In-_Ye-hEtrDlr76eKhOqf9RGpR9v5wyU=",
      title: "",
      subTitle: "Got an Idea!",
      text: "Let's Make something Great.",
    },
  ];

  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
      }}
      aria-label="My Favorite Images"
      className="h-screen"
    >
      {bgs.map((bg, index) => (
        <SplideSlide key={index} className=" h-screen">
          <div className="w-full h-full">
            <div className="flex relative h-full">
              <img
                alt="gallery"
                className="absolute inset-0 w-screen h-screen object-cover object-center "
                src={bg.url}
              />
              <div className="relative z-10 h-full w-full flex items-center justify-center  flex-col text-gray-200 text-opacity-90 p-4 ">
                <h2 className="tracking-widest text-6xl title-font font-medium mb-3">
                  {bg.title}
                </h2>
                <h1 className="title-font text-3xl font-mediu mb-3 text-center px-4">
                  {bg.subTitle}
                </h1>
                <p className="leading-relaxed text-xl px-4 text-center">
                  {bg.text}
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};
