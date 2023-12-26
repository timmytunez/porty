import React from "react";
import { About, Contact, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills } from "./";
import { AnimatePresence } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="w-full xl:w-[1300px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* particles */}
      <ParticlesContainer/>

      {/* header */}
      <Header />

      {/* home container */}
      <Home />

      {/* servicecount */}
      <ServiceCount />

      {/* about container */}
      <About />

      {/* skills container */}
      <Skills />

      {/* projects container */}
      <Projects />

      {/* contact container */}
      <Contact />

      {/* footer */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">timmyTunez</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials && Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />
            ))}
          </AnimatePresence>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center font-sans">
          Connect With Me:
          <br />
          Feel free to reach out for collaboration, inquiries, or just to say hello! I'm always open to exciting opportunities and discussions.          </p>
          <p className="text-texlight text-center font-sans ml-10">
          Disclaimer:
          <br />
          This portfolio is a representation of my skills, projects, and experiences. All content is solely for demonstration purposes.   
          Copyright © [2023] [Akande Timothy Olawole] | All Rights Reserved.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center font-sans">
              Aakndeolawole@gmail.com
            </p>
            <p className="text-texlight text-center font-sans">
              Akande Timothy Olawole
            </p>
            <p className="text-texlight text-centr font-sans">+234 0715662007</p>
            <a href="/">
              <p className="text-primary text-center">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
