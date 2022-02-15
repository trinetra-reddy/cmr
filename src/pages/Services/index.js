import React from "react";
import { Banner } from "../../components/ui/Banner";
import serviceImage from "../../Assets/cmrService.png";
import classes from "./Services.module.scss";

export const Services = () => {
  return (
    <div>
      <Banner title="Services" />
      <div className="container nunito">
        <div className="row justify-content-around align-items-center">
          <div className={`col-md-6 ${classes.content}`}>
            <h4>IT-Training</h4>
            <p>
              Learning a new technology and to lead a Job role is not easy. With
              instructor-led Classroom/Online Training opted from Druyu
              Technologies, you can develop skills that directly transfer from
              the Classroom/Online to the workplace. Each Classroom/Online
              software training course includes the planning, design,
              implementation, management, and support phases of the technology
              adoption of the course.
            </p>
            <p>
              We as a team believe that “Every new invention started in the
              Classroom/Online and then it was an implementation on the platform
              of the industry”, hence every student who comes into the
              Classroom/Onlines of CMR Solutions is made to understand the
              skills demanded by the industry and is mentored to lead a
              responsible role for the benefit of the industry.
            </p>
          </div>
          <div className="col-md-6">
            <img src={serviceImage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className={` ${classes["about-team-help"]} nunito`}>
        <h4 className={`${classes.heading} nunito`}>How Team Can Help</h4>
        <div className="container">
          <div className="row justify-content-around">
            <div className={`col-md-6 ${classes["about-content"]}`}>
              <div className={classes.one}>01</div>
              <p>
                CMR Solutions fairly opts for instructor-led Classroom/Online
                training, where every trainer is trained before he interacts for
                with the students to be a mentor in building the industrial
                skills and professional attitude what exactly the industry
                demands. All our trainers associate as a team in training and
                building the various skills, hence the students never feel the
                difference when they are moving between various technologies in
                their training path.
              </p>
            </div>
            <div className={`col-md-6 ${classes["about-content"]}`}>
              <div className={classes.two}>02</div>
              <p>
                CMR Solutions believes that “The Classroom/Online is the first
                step where the students begins his journey towards the industry”
                and every second of his stay within our class rooms counts for
                the success in their career. To make the student sharpen his
                “Personality of Professionalism”, our Classroom/Onlines are well
                equipped by the infrastructure and architecture as demanded by
                the variants of software technologies.
              </p>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className={`col-md-12 ${classes["about-content"]}`}>
              <div className={classes.three}>03</div>
              <p>
                As a team we in CMR Solutions make the students realize the
                challenging trends that are up-coming in the fields of the
                software industry, every student is transformed from the basics
                to the advanced implementations in the product and application
                development. Irrespective of the students academic performance
                the student gains the standards of the industrial trends and
                technologies, every trainer is mentored by the academic training
                research division to mentor the students as per the industrial
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
