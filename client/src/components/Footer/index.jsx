import { FooterDiv } from "./Footer.modules";

function Footer() {
  return (
    <FooterDiv>
      <p>
        © Copyright <strong>VRG</strong>. All Rights Reserved
      </p>
      <p>
        Inspired by{" "}
        <a
          href="https://bootstrapmade.com/"
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
        >
          BootstrapMade
        </a>
      </p>
    </FooterDiv>
  );
}

export default Footer;
