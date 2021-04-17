import { HeroBackground, HeroForeground } from "./Homepage.modules";
import Typical from "react-typical";

const stepsTime = 2000;
const steps = ["Full-Stack Developer", stepsTime, "Casual Gamer 🎮", stepsTime];

function Homepage() {
  return (
    <HeroBackground name="home">
      <HeroForeground>
        <h1>
          Hello,
          <br />I am Vatsal Ghoghari
        </h1>
        <Typical steps={steps} loop={Infinity} wrapper={"p"} />
      </HeroForeground>
    </HeroBackground>
  );
}

export default Homepage;
