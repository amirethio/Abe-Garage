import React from "react";
import Video from "../components/Video/Video";
import AboutSectionComponent from "../components/AboutSectionComponent";
import OurServiceComponent from "../components/OurServiceComponent";
import WhyChooseUs from "../components/WhyChooseUs";
import ScheduleAppointment from "../components/ScheduleAppointment";
import BottomVideo from "../components/Video/BottomVideo";

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
      />
      <ScheduleAppointment />
    </>
  );
}

export default Home;
