import styled, { css } from "styled-components";
import BackgroundImage from "../../images/hero-bg2.jpg";

const Background = styled.div`
  width: 100%;
  min-height: 90vh;

  background: linear-gradient(rgba(0, 119, 255, 0.7), rgba(0, 119, 255, 0.7)),
    url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* background-attachment: fixed; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Foreground = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2em 0;
  padding: 2em 1em;

  background: white;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 6%), 0 2px 5px 0 rgb(0 0 0 / 20%);

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;

  span {
    border-bottom: #0078ff 5px solid;
    font-size: 2em;
    font-weight: bold;
  }

  @media (max-width: 650px) {
    grid-template-rows: 1fr;
    grid-template-columns: none;
    column-gap: 0em;
  }

  @media (max-width: 350px) {
    font-size: 0.7em;
  }
`;

const SocialMedia = styled.div`
  font-size: 1.2em;
  height: 70%;
  max-height: 350px;
  margin: 1em 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 650px) {
    align-items: center;
  }
`;

const SocialLinkStyles = styled.a`
  text-decoration: none;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid #0078ff;
  border-radius: 10em;

  padding: 0.4em;
  margin: 0 0.3em;

  transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;

  :hover {
    background: #0078ff;
    color: white;
    border: 3px solid #86b7fe;
  }
`;

const FormHolder = styled.div`
  width: 100%;
`;

const Form = styled.form`
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input,
  textarea {
    width: 90%;
    max-width: 500px;
    margin: 0.7rem;
    padding: 10px 15px;

    border: 2px solid grey;

    border-radius: 0;
    box-shadow: none;
    font-size: 14px;

    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;

    transition: color 0.25s ease, background-color 0.25s ease,
      border-color 0.25s ease, outline 0.25s ease, box-shadow 0.25s ease;
  }

  input:focus,
  textarea:focus {
    color: #212529;
    background-color: #fff;

    outline: 0;
  }

  input:focus {
    border-color: ${(props) => (props.nameError ? "#ff0000" : "#86b7fe")};
    box-shadow: 0 0 0 0.25rem
      ${(props) =>
        props.nameError ? "rgb(255 0 0 / 25%)" : "rgb(13 110 253 / 25%)"};
  }

  textarea:focus {
    border-color: ${(props) => (props.messageError ? "#ff0000" : "#86b7fe")};
    box-shadow: 0 0 0 0.25rem
      ${(props) =>
        props.messageError ? "rgb(255 0 0 / 25%)" : "rgb(13 110 253 / 25%)"};
  }
`;

const NameError = styled.p`
  color: red;
  display: none;
  ${(props) =>
    props.nameError &&
    css`
      display: inline-block;
    `}
`;

const MessageError = styled.p`
  color: red;
  display: none;
  ${(props) =>
    props.messageError &&
    css`
      display: inline-block;
    `}
`;

const SubmitButton = styled.button`
  cursor: ${(props) => (props.sent ? "default" : "pointer")};
  padding: 0.6em 1.5em;

  border: 2px solid #0078ff;
  border-radius: 5em;
  background: ${(props) => (props.sent ? "#0078ff" : "transparent")};

  outline: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    margin-right: 0.5em;
    font-size: 1.5em;
    color: ${(props) => (props.sent ? "white" : "#0078ff")};
    transition: color 0.3s ease;
  }

  svg {
    color: ${(props) => (props.sent ? "white" : "#0078ff")};
    transform: scale(1.5);
    transition: color 0.3s ease;
  }

  transition: background 0.3s ease, border 0.3s ease;

  ${(props) =>
    props.sent ||
    css`
      :hover {
        background: #0078ff;

        border: 2px solid #cde1f8;
        p,
        svg {
          color: white;
        }
      }
    `}
`;

function SocialLink({ icon, link }) {
  return (
    <SocialLinkStyles href={link} target="_blank">
      {icon}
    </SocialLinkStyles>
  );
}

export {
  Background,
  Foreground,
  FormHolder,
  Form,
  SubmitButton,
  SocialMedia,
  SocialLink,
  NameError,
  MessageError,
};
