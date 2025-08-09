import React from "react";
import Video from "../components/Video/Video";
import AboutSectionComponent from "../components/AboutSectionComponent";
import OurServiceComponent from "../components/OurServiceComponent";

function Home() {
  return (
    <>
      <Video />
      <AboutSectionComponent/>
      <OurServiceComponent/>
      <div>Home</div>
    </>
  );
}

export default Home;
