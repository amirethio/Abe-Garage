import React from "react";
import BottomVideo from "../../components/Global/Video/BottomVideo";
import OurAdress from "../../components/Global/OurAdress";
import ScheduleAppointment from "../../components/Global/ScheduleAppointment";
import bgImage from "./../../../assets/images/misc/skill1.png";
function Contact() {
  return (
    <>
      <BottomVideo
        text="Contact Us"
        page="contact us"
        img={bgImage}
        height="400px"
      />
      <OurAdress />
      <ScheduleAppointment />
    </>
  );
}

export default Contact;
