import {
  Background,
  Foreground,
  FormHolder,
  Form,
  SubmitButton,
  SocialMedia,
  SocialLink,
  NameError,
  MessageError,
} from "./Contactpage.modules";
import { FiSend, FiMail } from "react-icons/fi";
import { BsCheck } from "react-icons/bs";

import { FaInstagram, FaWhatsapp, FaDiscord } from "react-icons/fa";

import { useState } from "react";
import API from "../../api";

function Contactpage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameError || messageError) return;
    setClicked(true);
    API.post("/feedback", { name: name, message: message });
  };

  const handleNameChange = (e) => {
    const text = e.target.value;
    setName(text);
    setNameError(text.length >= 1 && text.length < 3);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    const text = e.target.value;
    setMessage(text);
    setMessageError(text.length >= 1 && text.length < 3);
  };

  return (
    <Background name="contact">
      <Foreground>
        <FormHolder>
          <span>Send Feedback</span>
          <Form
            onSubmit={handleSubmit}
            nameError={nameError}
            messageError={messageError}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleNameChange}
              disabled={clicked ? true : false}
            />
            <NameError nameError={nameError}>
              Name should be atlest 3 character long.
            </NameError>
            <textarea
              name="feedback"
              cols="30"
              rows="10"
              placeholder="Message"
              style={{ resize: "vertical" }}
              value={message}
              onChange={handleMessageChange}
              disabled={clicked ? true : false}
            />
            <MessageError messageError={messageError}>
              Message should be atlest 3 character long.
            </MessageError>
            <SubmitButton
              type="submit"
              disabled={clicked ? true : false}
              sent={clicked}
            >
              <p> {clicked ? "Thank you" : "SEND"}</p>
              {clicked ? <BsCheck /> : <FiSend />}
            </SubmitButton>
          </Form>
        </FormHolder>
        <div style={{ width: "100%" }}>
          <span>Social Media</span>
          <SocialMedia>
            <SocialLink
              icon={<FaInstagram />}
              link="https://www.instagram.com/vatsal_ghoghari/"
            />
            <SocialLink
              icon={<FaWhatsapp />}
              link="https://api.whatsapp.com/send?phone=917203088769"
            />
            <SocialLink
              icon={<FaDiscord />}
              link="https://discord.gg/4esvUJcEFP"
            />
            <SocialLink
              icon={<FiMail />}
              link="https://mail.google.com/mail/u/?authuser=vghoghari82@gmail.com"
            />
          </SocialMedia>
        </div>
      </Foreground>
    </Background>
  );
}

export default Contactpage;
