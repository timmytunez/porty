import React from "react";
import { About, Contact, Header, Home, Projects, ServiceCount, Skills } from "./";

const App = () => {
  return (
    <div className="w-full xl:w-[1300px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particles */}

      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* servicecount */}
      <ServiceCount /> 

      {/* about container */}
      <About/>

      {/* skills container */}
      <Skills/>

      {/* projects container */}
      <Projects/>

      {/* contact container */}
      <Contact/>

      {/* footer */}
    </div>
  );
};

export default App;
