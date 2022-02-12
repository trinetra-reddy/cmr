import React from 'react';
import classes from './AboutUsContent.module.scss';

export const AboutUsContent = () => {
    return (
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
    )
}