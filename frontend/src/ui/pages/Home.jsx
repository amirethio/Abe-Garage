import React from "react";
import Video from "../components/Video/Video";
import AboutSectionComponent from "../components/AboutSectionComponent";
import OurServiceComponent from "../components/OurServiceComponent";
import WhyChooseUs from "../components/WhyChooseUs";
import ScheduleAppointment from "../components/ScheduleAppointment";
import BottomVideo from "../components/Video/BottomVideo";
import bgImage from "./../../assets/images/misc/skill1.png"
function Home() {
  return (
    <>
      <Video />
      <AboutSectionComponent />
      <OurServiceComponent />
      <WhyChooseUs />
      <BottomVideo
        text="We are leader
in Car Mechanical Work"
        video={true}
        img={bgImage}
        height="400px"
      />
      <ScheduleAppointment />
    </>
  );
}

export default Home;
