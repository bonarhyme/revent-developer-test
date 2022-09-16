import React from "react";
import { call, send } from "../../images/icons";
import Button from "../Shareables/Button";

const reachUs = {
  call: "+234 806 749 700",
  email: "revent@digital.com",
};

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <h2 className="heading-fancy">Get in Touch</h2>

      <div className="actual-texts">
        <div className="contact-points">
          <div className="contact-point">
            <div className="icon">
              <img src={call} alt="call us" width={40} height={40} />
            </div>
            <p className="prompt">Call Us</p>
            <p className="reach">{reachUs?.call}</p>
          </div>
          <div className="contact-point">
            {" "}
            <div className="icon">
              <img src={send} alt="send email" width={40} height={40} />
            </div>
            <p className="prompt">Send Email</p>
            <p className="reach">{reachUs?.email}</p>
          </div>
        </div>
      </div>
      <div className="form-container">
        <form>
          <div className="twin-input">
            <div className="form-control">
              <input type="text" />
            </div>
            <div className="form-control">
              <input type="text" />
            </div>
          </div>
          <div className="form-control">
            <input type="text" />
          </div>
          <div className="form-control">
            <textarea></textarea>
          </div>

          <Button button buttonType="submit" text="Send message" />
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
