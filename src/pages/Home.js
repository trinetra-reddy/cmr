import React from "react";
import { Button } from "../components/ui/Button";
import Card from "../components/ui/Card";
import classes from "./Home.module.scss";
import devops from "../Assets/cmrdevops.png";
import python from "../Assets/cmrpython.png";
import UI from "../Assets/cmrui.png";
import oracleHcm from "../Assets/cmrOracleHcm.png";
import Testing from "../Assets/cmrtesting.png";
import power from "../Assets/powerBi.jpg";
import sap from "../Assets/sap.png";
import rpa from "../Assets/rpa.jpg";
import oracleFinance from "../Assets/oracleFinance.png";
import oracleAppTech from "../Assets/oracle-apps-technical.jpg";
import oracleFrameWork from "../Assets/oracle-oaf-training.png";

const Features = [
  {
    title: "IT-Training",
    src: "https://druyu-tech.com/wp-content/uploads/2020/03/service_img1.png",
    hoverSrc:
      "https://druyu-tech.com/wp-content/uploads/2020/03/service_img1-active.png",
    desc: "DISCOVER, EXPLORE &amp; UNDERSTANDING THE PRODUCT",
  },
  {
    title: "Placement Assistance",
    src: "https://druyu-tech.com/wp-content/uploads/2020/03/service_img2.png",
    hoverSrc:
      "https://druyu-tech.com/wp-content/uploads/2020/03/service_img2-active.png",
    desc: "DISCOVER, EXPLORE &amp; UNDERSTANDING THE PRODUCT",
  },
  {
    title: "Internship Programs",
    src: "https://druyu-tech.com/wp-content/uploads/2020/03/service_img3.png",
    hoverSrc:
      "https://druyu-tech.com/wp-content/uploads/2020/03/service_img3-active.png",
    desc: "DISCOVER, EXPLORE &amp; UNDERSTANDING THE PRODUCT",
  },
  {
    title: "Soft Skills & Communication Skills",
    src: "https://druyu-tech.com/wp-content/uploads/2020/03/service_img4.png",
    hoverSrc:
      "https://druyu-tech.com/wp-content/uploads/2020/03/service_img4-active.png",
    desc: "DISCOVER, EXPLORE &amp; UNDERSTANDING THE PRODUCT",
  },
];

export const Home = () => {
  console.log("Rpa", rpa);
  const Courses = [
    {
      title: "",
      src: oracleHcm,
      hoverSrc: oracleHcm,
      desc: "Oracle Cloud HCM",
    },
    {
      title: "",
      src: UI,
      hoverSrc: UI,
      desc: "User Interface (UI)",
    },
    {
      title: "",
      src: devops,
      hoverSrc: devops,
      desc: "Devops",
    },
    {
      title: "",
      src: python,
      hoverSrc: python,
      desc: "Python",
    },
    {
      title: "",
      src: power,
      hoverSrc: power,
      desc: "Microsoft Power BI",
    },
    {
      title: "",
      src: sap,
      hoverSrc: sap,
      desc: "SAP Functional",
    },
    {
      title: "",
      src: rpa,
      hoverSrc: rpa,
      desc: "Robotic Process Automation (RPA)",
    },
    {
      title: "",
      src: oracleFinance,
      hoverSrc: oracleFinance,
      desc: "Oracle Cloud Finance",
    },
    {
      title: "",
      src: oracleFrameWork,
      hoverSrc: oracleFrameWork,
      desc: "Oracle Application Frame Work (OAF)",
    },
    {
      title: "",
      src: oracleAppTech,
      hoverSrc: oracleAppTech,
      desc: "Oracle Apps Technicals",
    },
    {
      title: "",
      src: Testing,
      hoverSrc: Testing,
      desc: "Performance Testing",
    },
  ];
  return (
    <div className={classes["home-wrapper"]}>
      <div className={classes["banner-wrapper"]}>
        <div className={classes["banner-image-container"]}>
          <div className={classes["banner-image"]}>
            <img
              width="1056"
              height="750"
              src="https://druyu-tech.com/wp-content/uploads/2020/03/your_success.jpg"
              className="attachment-full size-full"
              alt=""
              loading="lazy"
              srcSet="https://druyu-tech.com/wp-content/uploads/2020/03/your_success.jpg 1056w, https://druyu-tech.com/wp-content/uploads/2020/03/your_success-300x213.jpg 300w, https://druyu-tech.com/wp-content/uploads/2020/03/your_success-1024x727.jpg 1024w, https://druyu-tech.com/wp-content/uploads/2020/03/your_success-768x545.jpg 768w, https://druyu-tech.com/wp-content/uploads/2020/03/your_success-480x341.jpg 480w"
              sizes="(max-width: 1056px) 100vw, 1056px"
              title="CMR Solutions"
            />
          </div>
        </div>
      </div>
      <div>
        <div className={classes.spacer}></div>
        <div className={classes["banner-text"]}>
          <div className={classes.content}>
            <h4 className="nunito">WELCOME</h4>
            <h1 className="nunito">CMR Achievers Solutions</h1>
            <h6>
              CMR Solutions is a digital transformation IT training &amp;
              consulting services company
            </h6>
            <div className="my-4">
              <Button>Join Today</Button>
            </div>
          </div>
        </div>
        <div className="text-left">
          <img
            width="138"
            height="262"
            src="https://druyu-tech.com/wp-content/uploads/2020/03/element_01.png"
            className={classes["attachment-full"]}
            alt=""
            loading="lazy"
            title="element_01"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="container-fluid nunito">
                <h5 className={classes.heading}>CARE FEATURES</h5>
                <h3 className={`${classes.heading} mb-3`}>
                  Provide Awesome Service
                </h3>
                <div className={`row ${classes.cards}`}>
                  {Features.map((item, index) => (
                    <div className="col-md-4 col-lg-3" key={index}>
                      <Card>
                        <div className={`${classes["card-heading"]} nunito`}>
                          {item.title}
                          <br /> <br />
                        </div>
                        <div className={classes["card-img"]}>
                          <img
                            src={item.src}
                            className="attachment-full size-full"
                            alt=""
                            loading="lazy"
                            title="service_img1"
                            onMouseOver={(e) =>
                              (e.currentTarget.src = item.hoverSrc)
                            }
                            onMouseOut={(e) => (e.currentTarget.src = item.src)}
                          />
                        </div>
                        <p className={classes["card-text"]}>
                          DISCOVER, EXPLORE &amp; UNDERSTANDING THE PRODUCT
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
                <div className="row"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-md-6 px-5 mt-4">
              <div className={`${classes.para} nunito`}>About Us</div>
              <div className={`${classes["side-heading"]} nunito`}>
                About CMR Achievers Solutions
              </div>
              <p className="font-weight-bold nunito">
                CMR Achievers Solutions is a digital transformation IT training
                & consulting services company established in 2020 by recruitment
                leaders in industry who comes with rich experience in Corporate
                training and consulting.
              </p>
            </div>
            <div className="col-md-6 nunito">
              <div className="container nunito">
                <div className="row mb-2">
                  <div className={`col-md-4 ${classes["about-count"]}`}>
                    <div className={`${classes.count} nunito`}>
                      20 <sup className="text-danger">+</sup>{" "}
                    </div>
                    <div className="nunito">COURSES</div>
                  </div>
                  <div className={`${classes["about-para"]} col-md-8`}>
                    Vision :Most admired company by employees, partners, clients
                    and stake holders.
                  </div>
                </div>
                <div className="row mb-2">
                  <div className={`col-md-4 ${classes["about-count"]}`}>
                    <div className={`${classes.count} nunito`}>
                      150 <sup className="text-danger">+</sup>{" "}
                    </div>
                    <div className="nunito">STUDENTS</div>
                  </div>
                  <div className={`${classes["about-para"]} col-md-8`}>
                    Mission : CMR Achievers Solutions provides simple IT
                    solutions across complex business needs, ensuring commitment
                    and quality processes through 4i global delivery frame work.
                  </div>
                </div>
                <div className="row mb-2">
                  <div className={`col-md-4 ${classes["about-count"]}`}>
                    <div className={`${classes.count} nunito`}>
                      100 <sup className="text-danger">+</sup>{" "}
                    </div>
                    <div className="nunito">LETURERS</div>
                  </div>
                  <div className={`${classes["about-para"]} col-md-8`}>
                    Value : Respect all stakeholders with professionalism by
                    maintaining high degree of integrity and ethical standards
                    in every transaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="container-fluid nunito">
                <h5 className={classes.heading}>CARE FEATURES</h5>
                <h3 className={`${classes.heading} mb-3`}>
                  Provide Awesome Service
                </h3>
                <div className="row">
                  {Courses.map((item, index) => (
                    <div className="col-md-4 col-lg-3" key={index}>
                      <Card className={classes["courses-card"]}>
                        <div className={classes["card-img"]}>
                          <img
                            src={item.src}
                            className="attachment-full size-full"
                            alt=""
                            loading="lazy"
                            title="service_img1"
                          />
                        </div>
                        <p className={classes["card-desc"]}>{item.desc}</p>
                      </Card>
                    </div>
                  ))}
                </div>
                <div className="row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
