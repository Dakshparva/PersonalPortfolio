import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rotary High School, Nanjangud, Karnataka State
          </h3>
          <p> High School</p>
          <p>Aggregate percentage : 91.36% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Citizens Pu college,  Nanjangud, Karnataka State
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Intermediate
          </h4>

          <p> Puc</p>
          <p>Aggregate percentage : 81% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vidya Vikas Institute of Engineering and Technology, Mysoru, Karnataka State
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            My bachelor degree 
          </h4>

          <p> Mechanical Engineering</p>
          <p>Aggregate percentage : 70.25% </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          GRADUATE ENGINEER TRAINEE- Siderforgerossi india private limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mysoru, Karnataka.
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          MECHANICAL DESIGN ENGINEER - Meccarnate solutions private limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Bengaloru, Karnataka.
          </h4>
      
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          MECHANICAL DESIGN ENGINEER - Incastt machines
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Mysoru, Karnataka.
          </h4>
      
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Assistant Engineer - Sandvik Asia pvt.ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Bengaloru, Karnataka.
          </h4>
      
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
         Full Stack Web Development Course - Newton School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Bengaloru, Karnataka.
          </h4>
      
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;