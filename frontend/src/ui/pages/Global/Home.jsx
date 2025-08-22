import React from "react";
import Video from "../../components/Global/Video/Video";
import AboutSectionComponent from "../../components/Global/AboutSectionComponent";
import OurServiceComponent from "../../components/Global/OurServiceComponent";
import WhyChooseUs from "../../components/Global/WhyChooseUs";
import ScheduleAppointment from "../../components/Global/ScheduleAppointment";
import BottomVideo from "../../components/Global/Video/BottomVideo";
import bgImage from "./../../../assets/images/misc/skill1.png";
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
