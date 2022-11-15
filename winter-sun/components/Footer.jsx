import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  height: auto;
  width: 100%;
  padding: 8rem 8rem;
  @media (max-width: 900px) {
    padding: 4rem 4rem;
  }

  background-color: #f761a6;

  .flex {
    display: flex;
    flex-direction: row;
    gap: 4rem;

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 2rem;
      font-size: 2rem;
    }
  }

  .text {
    font-size: 2.5rem;
    color: white;
    height: 420px;
    width: 100%;

    @media (max-width: 900px) {
      height: auto;
    }

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 1800px) {
      font-size: 2rem;
    }
    @media (max-width: 1280px) {
      font-size: 1.5rem;
    }
    @media (max-width: 900px) {
      font-size: 1.25rem;
    }

    a {
      color: white;
      text-decoration: none;
      width: 100%;
    }

    span {
      font-weight: 200;
      white-space: nowrap;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="flex" style={{ maxWidth: 1920, margin: "auto" }}>
        <div className="text">
          <Link className="link" href="">
            www.solarnistudiojj.cz
          </Link>
          <div>
            <p>
              Adresa:{" "}
              <span>
                Spáčilova<>&nbsp;</>569/27,<>&nbsp;</>Kroměříž
              </span>
            </p>
            <a href="tel:+420722039233">
              Telefonní číslo:{" "}
              <span>
                +420<>&nbsp;</>722<>&nbsp;</>039<>&nbsp;</>233
              </span>
            </a>
            <br />
            <a href="mailto:solarnistudiojj@seznam.cz">
              E-mail: <span>solarnistudiojj@seznam.cz</span>
            </a>
          </div>
          <p>Parkoviště u solárního studia zdarma !!!</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.8981917442884!2d17.40356211585226!3d49.29727167765743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471307b75c97e2e9%3A0xb1e2b7c926fd3e6c!2sWinter%20Sun%20Solarni%20studio!5e0!3m2!1scs!2scz!4v1668427981537!5m2!1scs!2scz"
          width="100%"
          height="420"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </StyledFooter>
  );
};

export default Footer;
