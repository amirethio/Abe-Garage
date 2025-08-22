import React from "react";
import OurServiceComponent from "../../components/Global/OurServiceComponent";
import BottomVideo from "../../components/Global/Video/BottomVideo";
import ScheduleAppointment from "../../components/Global/ScheduleAppointment";
import bgImage1 from "./../../../assets/images/misc/skill5.png";
import bgImage2 from "./../../../assets/images/misc/skill4.png";
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
