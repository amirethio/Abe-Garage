import React from "react";
import BottomVideo from "../../components/Global/Video/BottomVideo";
import SkillSection from "../../components/Global/SkillSection";
import AboutSectionComponent from "../../components/Global/AboutSectionComponent";
import WhyChooseUs from "../../components/Global/WhyChooseUs";
import ScheduleAppointment from "../../components/Global/ScheduleAppointment";
import bgImage from "./../../../assets/images/misc/skill1.png";
import bgImage2 from "./../../../assets/images/misc/skill4.png";
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
