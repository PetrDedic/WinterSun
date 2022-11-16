import styled from "styled-components";
import Image from "next/image";
import { useClickOutside } from "../hooks/useClickOutside";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRef, useState } from "react";
config.autoAddCss = false;

const StyledNavbar = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

  width: 100%;
  height: 6rem;
  background-color: white;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1280px) {
    height: 4rem;
  }

  .logo {
    height: 6rem;
    @media (max-width: 1280px) {
      height: 4rem;
      width: 5rem;
      margin: 0 1rem;
    }
    width: 7rem;
    position: relative;

    margin: 0 4rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      display: none;
    }

    gap: 3rem;
    @media (max-width: 1280px) {
      gap: 2rem;
    }
    margin: 0 3rem;

    a {
      color: #777;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 300;

      @media (max-width: 1280px) {
        font-size: 1.25rem;
      }

      font-family: "Josefin Sans", sans-serif;

      transition: 250ms;

      &:hover {
        color: black;
      }
    }
  }

  .menu-button {
    @media (min-width: 900px) {
      display: none;
    }

    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    background-color: #00000084;
    backdrop-filter: blur(4px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      a {
        font-size: 2.5rem;
        color: white;
        text-decoration: none;
        font-weight: 600;
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => setOpen(false));

  return (
    <StyledNavbar>
      <div className="logo">
        <Image
          src="/logo_svg.svg"
          fill
          alt="logo"
          priority
          sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 20vw,
              20vw"
        />
      </div>
      <nav>
        <Link href="/">Úvod</Link>
        <Link href="/o-nas">O nás</Link>
        <Link href="/solaria">Solária</Link>
        <Link href="/fotografie">Fotografie</Link>
        <Link href="/cenik">Ceník</Link>
        <Link href="#footer">Kontakt</Link>
      </nav>
      <div className="menu-button" onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {open ? (
        <div className="menu">
          <div className="flex" ref={ref}>
            <Link href="/">Úvod</Link>
            <Link href="/o-nas">O nás</Link>
            <Link href="/solaria">Solária</Link>
            <Link href="/fotografie">Fotografie</Link>
            <Link href="/cenik">Ceník</Link>
            <Link href="#footer">Kontakt</Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
