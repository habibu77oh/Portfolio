import React,{ useState } from "react";
import "./contact.css";
import "boxicons";
import { TOKEN,GROUPID } from "./token";

function Contact() {

  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [adres, setadres] = useState("");
  const [message, setmessage] = useState("");

  async function Send() {
    let Data = `New message✉️ 

  👤Ism: ${name}  
  📞Aloqa:  ${phone} 
  📧Email: ${adres}  
  💡Taklif: ${message}`;
    
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${GROUPID}&text=${encodeURI(Data)}`;
    const response = await fetch(url);
    let res = await response.json();

    setname("");
    setphone("");
    setadres("");
    setmessage("");
  }

  return (
    <section className="contact sectoin" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <a
                href="mailto:habibullohzekirullayev@example.com"
                className="contact__button"
              >
                {" "}
                <box-icon name='gmail' type='logo' ></box-icon>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <a
                href="https://www.instagram.com/habibu77oh"
                className="contact__button"
              >
                {" "}
                <box-icon name='instagram-alt' type='logo' ></box-icon>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>
              <h3 className="contact__card-title">Telegram</h3>
              <a href="https://t.me/habibu77oh" className="contact__button">
                {" "}
              <box-icon name='telegram' type='logo' ></box-icon>          
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>
              <h3 className="contact__card-title">Github</h3>
              <a href="https://github.com/habibu77oh" className="contact__button">
                {" "}
              <box-icon name='github' type='logo' ></box-icon>          
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <div className="from ">
            <div className="contact__from-div">
              <label className="contact__from-tag">Name</label>
              <input
                onChange={(e) => setname(e.target.value)}
                value={name}
                type="text"
                name="name"
                className="contact__from-input"
                placeholder="Enter yor name"
              />
            </div>

            <div className="contact__from-div">
              <label className="contact__from-tag">Phone</label>
              <input
                onChange={(e) => setphone(e.target.value)}
                value={phone}
                type="text"
                name="phone"
                className="contact__from-input"
                placeholder="Enter yor phone number"
              />
            </div>

            <div className="contact__from-div">
              <label className="contact__from-tag">E-mail</label>
              <input
                onChange={(e) => setadres(e.target.value)}
              value={adres}
                type="email"
                name="email"
                className="contact__from-input"
                placeholder="Enter yor email"
              />
            </div>


            <div className="contact__from-div contact__from-area">
              <label className="contact__from-tag">Project</label>
              <textarea
                onChange={(e) => setmessage(e.target.value)}
                value={message}
                name="project"
                cols="30"
                rows="10"
                className="contact__from-input"
                placeholder="Enter yor project"
              ></textarea>
            </div>
            <button className="button button--flex" onClick={Send}>Send message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
