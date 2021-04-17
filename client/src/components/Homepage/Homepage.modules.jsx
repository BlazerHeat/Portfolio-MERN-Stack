import styled from "styled-components";
import heroBG from "../../images/hero-bg3.jpg";

const HeroBackground = styled.div`
  height: 100vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${heroBG});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* background-attachment: fixed; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroForeground = styled.div`
  color: white;
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 0 1em;

  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`;

export { HeroBackground, HeroForeground };
