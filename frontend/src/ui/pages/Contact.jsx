import React from 'react'
import BottomVideo from '../components/Video/BottomVideo';
import OurAdress from '../components/OurAdress';
import ScheduleAppointment from '../components/ScheduleAppointment';
import bgImage from "./../../assets/images/misc/skill1.png"
function Contact() {
  return (
    <>
      <BottomVideo text="Contact Us" page="contact us" img={bgImage}
              height="400px" />
      <OurAdress />
      <ScheduleAppointment/>
    </>
  );
}

export default Contact