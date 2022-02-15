import React from "react";
import classes from "./ContactUs.module.scss";
import contact from "../Assets/contacts_01.jpg";

const ContactUs = () => {
  return (
    <div className={classes["contact-wrapper"]}>
      <div className={classes.banner}>
        <div className="container position-relative">
          <div className={`${classes.heading} text-white text-center`}>
            Contact Us
          </div>
        </div>
      </div>
      <div className="text-center">
        <img src={contact} alt="icon" className="img-fluid" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="nunito font-weight-bold">GET IN TOUCH</h6>
            <div className={classes.heading}>Contact Us</div>
            <div className={classes["address-container"]}>
              <div className={classes.title}>Phone</div>
              <div className={classes.custom}>
                +91 9000573185, <br />
                +91 9494530623, <br />
                08554 292079
              </div>
            </div>
            <div className={classes["address-container"]}>
              <div className={classes.title}>Send Mail</div>
              <div className={classes.desc}>
                cmrachieverssolutions@gmail.com
              </div>
            </div>
            <div className={classes["address-container"]}>
              <div className={classes.title}>Phone</div>
              <div className={classes.desc}>
                CMR Achievers Solutions <br />
                D.No 11/1/204, 1st Floor, Dr. Bramhanandam clinic, beside
                Amaravathi Hospital, Aravinda Nagar, <br /> Anantapur, Andhra
                Pradesh 515001
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.7328030153108!2d77.59098571484105!3d14.671099189757552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b85cb7c2f6d%3A0xda595425f0998b7b!2sCMR%20Achievers%20Solutions!5e0!3m2!1sen!2sin!4v1642393655105!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
