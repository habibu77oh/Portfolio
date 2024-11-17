import React from "react";

function Info() {
  return (
    <div className="about__info  grid">
      <div className="about__box">
        <box-icon className="about__icon" name="award"></box-icon>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">initial</span>
      </div>
      <div className="about__box">
        <box-icon className="about__icon" name="briefcase-alt-2"></box-icon>
        <h3 className="about__title">Complated</h3>
        <span className="about__subtitle">3 + Projeects</span>
      </div>
      <div className="about__box">
        <box-icon className="about__icon" name="support"></box-icon>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">24/7</span>
      </div>
    </div>
  );
}

export default Info;
