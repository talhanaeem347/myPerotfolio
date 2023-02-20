import IFrame from "../components/IFrame";
import PropUp from "../components/PropUp";
import { CSSTransition } from "react-transition-group";
import React, { useState, useRef } from "react";
import "@/styles/style.css";

export default () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  return (
    <React.Fragment>
      {inProp && (
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={200}
          classNames="my-node"
        >
          <div ref={nodeRef}>
            <PropUp inProp={inProp} />
          </div>
        </CSSTransition>
      )}
      <section className=" h-screen   bg-blue-100 flex justify-center p-4 items-center lg:p-10 md:p-10">
        <div className="h-full w-full bg-red-100 rounded ">
          <h1 className="text-3xl font-bold text-center h-1/6   flex items-center justify-center ">
            Work
          </h1>
          <div className="flex flex-wrap h-5/6 w-full  items-stretch justify-around   ">
            <div className="lg:h-1/2 md:h-1/2 h-40 lg:w-2/3 md:w-2/3 sm:w-2/3 w-full p-4 shadow-md">
              <a
                href="https://gen-vue.netlify.app"
                target="_blank"
                onMouseEnter={() => setInProp(true)}
                onMouseLeave={() => setInProp(false)}
                className="h-full"
              >
                <IFrame img="/images/gva.jpg" />
              </a>
            </div>
            <div className="lg:h-1/2 md:h-1/2 h-40 lg:w-1/3 md:w-1/3 sm:w-2/3 w-full p-4 shadow-md">
              <a
                href="https://talhanaeem347.github.io/lahore-intro/"
                target="_blank"
                onMouseEnter={() => setInProp(true)}
                onMouseLeave={() => setInProp(false)}
              >
                <IFrame img="/images/Lahore.jpg" />
              </a>
            </div>
            <div className="lg:h-2/5 md:h-1/2 h-40 lg:w-1/3 md:w-1/3 sm:w-2/3 w-full p-4 flex justify-center items-center  shadow-md">
              <div className="h-full">
                <IFrame img="/images/shoue.jpg" />
              </div>
            </div>
            <div className="lg:h-1/2 md:h-1/2 h-40 sm:w-2/3 w-full p-4 shadow-md">
              <a
                href="https://ibranosheen.netlify.app"
                target="_blank"
                onMouseEnter={() => setInProp(true)}
                onMouseLeave={() => setInProp(false)}
                className="h-full"
              >
                <IFrame img="/images/Portfolio.svg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
