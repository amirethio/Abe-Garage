import React from "react";
import BottomVideo from "../components/Video/BottomVideo";
import SkillSection from "../components/SkillSection";
import AboutSectionComponent from "../components/AboutSectionComponent";
import WhyChooseUs from "../components/WhyChooseUs";
import ScheduleAppointment from "../components/ScheduleAppointment";
import bgImage from "./../../assets/images/misc/skill1.png"
import bgImage2 from "./../../assets/images/misc/skill4.png";
function About() {
  return (
    <>
      <BottomVideo
        text="About Us "
        video={false}
        page="About us"
        img={bgImage}
        height="400px"
      />
      <SkillSection />
      <AboutSectionComponent />
      <WhyChooseUs />
      <BottomVideo
        text="We are leader in Car Mechanical Work "
        video={true}
        img={bgImage2}
      />
      <ScheduleAppointment />
    </>
  );
}

export default About;
