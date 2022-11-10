import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

  .logo {
    height: 6rem;
    width: 7rem;
    position: relative;

    margin: 0 4rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 3rem;
    margin: 0 3rem;

    a {
      color: #777;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 300;

      font-family: "Josefin Sans", sans-serif;

      transition: 250ms;

      &:hover {
        color: black;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo">
        <Image src="/logo_svg.svg" fill alt="logo" priority />
      </div>
      <nav>
        <Link href="">Úvod</Link>
        <Link href="">O nás</Link>
        <Link href="">Solária</Link>
        <Link href="">Fotografie</Link>
        <Link href="">Ceník</Link>
        <Link href="">Kontakt</Link>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
