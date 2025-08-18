import React from "react";
import AboutSectionComponent from "../components/AboutSectionComponent";
import OurServiceComponent from "../components/OurServiceComponent";
import WhyChooseUs from "../components/WhyChooseUs";
import BottomVideo from "../components/Video/BottomVideo";
import ScheduleAppointment from "../components/ScheduleAppointment";
import bgImage1 from "./../../assets/images/misc/skill5.png";
import bgImage2 from "./../../assets/images/misc/skill4.png"
function Services() {
  return (
    <>
      <BottomVideo
        text="Our Services"
        page="Our Services"
        img={bgImage1}
        height="200px"
      />
      <OurServiceComponent />
      <BottomVideo
        text="We are leader
in Car Mechanical Work"
        video={true}
        img={bgImage2}
        height="400px"
      />
      <ScheduleAppointment />
    </>
  );
}

export default Services;
