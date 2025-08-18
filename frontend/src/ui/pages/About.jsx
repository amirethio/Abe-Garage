import React from 'react'
import BottomVideo from '../components/Video/BottomVideo';
import SkillSection from '../components/SkillSection';
import AboutSectionComponent from '../components/AboutSectionComponent';
import WhyChooseUs from '../components/WhyChooseUs';
import ScheduleAppointment from '../components/ScheduleAppointment';

function About() {
  return (
    <>
      <BottomVideo text="About Us " video={false} page="About us" />
      <SkillSection />
      <AboutSectionComponent />
      <WhyChooseUs />
      <BottomVideo text="We are leader in Car Mechanical Work " video={true} />
      <ScheduleAppointment/>
    </>
  );
}

export default About