import { Background, CardsHolder, Card } from "./Servicespage.modules";
import { FaReact } from "react-icons/fa";
import { IoServerOutline } from "react-icons/io5";
import { BiServer } from "react-icons/bi";

function Servicespage() {
  return (
    <Background name="services">
      <h3>SERVICES</h3>
      <p>Lets' see what can i do.</p>
      <CardsHolder>
        <Card
          pic={<FaReact />}
          heading="WEB DESGIN"
          text="The key feature of great websites are UI/UX and responsiveness (Auto-Scale with device width), I have 3 months expernice with React which is powerful JS libaray for frontend devlopent made by Facebook."
        />
        <Card
          pic={<BiServer />}
          heading="BACKEND DEVELOPMENT"
          text="Having good expiernece with Express (Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications). i can assure to code self-efficient (load handling) servers."
        />
        <Card
          pic={<IoServerOutline />}
          heading="DATABASE MANAGEMENT"
          text="SQL or NoSQL, I have good expiernce with Either of these databases which include MongoDB, MySQL, Postgres, etc.."
        />
      </CardsHolder>
    </Background>
  );
}

export default Servicespage;
