import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const Main = styled.main`
  width: 100%;
  height: auto;

  .easter {
    max-width: 80vw;
    max-height: 65vh;
    height: auto;
    object-fit: contain;
    border-radius: 2rem;
    margin: auto;

    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  }

  section.main {
    background-image: url("./background.svg");
    background-size: cover;
    background-position: top;

    display: flex;
    flex-direction: column;

    gap: 12rem;
    padding: 12rem 0;

    @media (max-width: 1600px) {
      gap: 8rem;
      padding: 8rem 0;
    }
  }

  div.cta {
    width: calc(100% - 16rem);
    @media (max-width: 1280px) {
      width: calc(100% - 8rem);
    }
    height: auto;
    margin: auto;
    max-width: 1920px;

    display: flex;
    flex-direction: row;
    gap: 4rem;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 2rem;
    }

    .cta-image {
      position: relative;
      width: 100%;
      aspect-ratio: 3500 / 2333;
      img {
        object-fit: contain;
        border-radius: 1rem;
      }
    }
    .cta-text {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 2rem;
      @media (max-width: 1280px) {
        gap: 1rem;
      }

      color: #777;

      h1 {
        font-size: 3rem;
        font-weight: 700;

        @media (max-width: 1800px) {
          font-size: 2.5rem;
        }
        @media (max-width: 1600px) {
          font-size: 1.75rem;
        }
        @media (max-width: 1280px) {
          font-size: 1.35rem;
        }
      }

      p {
        width: 75%;
        height: auto;
        font-size: 2rem;
        font-weight: 300;
        @media (max-width: 1800px) {
          font-size: 1.75rem;
        }
        @media (max-width: 1600px) {
          font-size: 1.25rem;
        }
        @media (max-width: 1280px) {
          font-size: 1rem;
        }
      }

      a {
        font-size: 1.5rem;
        color: #fff;
        text-decoration: none;
        padding: 0.75rem 2.5rem;
        background-color: #f761a6;
        border-radius: 1rem;
        width: min-content;

        @media (max-width: 1600px) {
          font-size: 1.25rem;
        }
      }
    }
  }
`;

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: grid;
  justify-content: center;
  align-content: center;

  &:after {
    position: absolute;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    content: "";
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  }

  .logo {
    top: 10%;
    width: 45vw;
    height: 45vw;
    position: relative;
  }
`;

const Sections = styled.section`
  height: auto;
  width: calc(100% - 16rem);
  @media (max-width: 1280px) {
    width: calc(100% - 8rem);
  }
  margin: auto;
  max-width: 1920px;

  display: flex;
  flex-direction: row;
  gap: 8rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
    font-size: 2rem;
  }

  .card {
    width: 100%;
    aspect-ratio: 4 / 5;
    text-decoration: none;

    @media (max-width: 900px) {
      max-width: 420px;
      margin: auto;

      p {
        font-size: 2.5rem !important;
      }
    }

    background-color: black;
    border-radius: 4rem;
    @media (max-width: 1280px) {
      border-radius: 2rem;
    }

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    -webkit-box-shadow: inset 0px -116px 147px 0px rgba(0, 0, 0, 0.9);
    -moz-box-shadow: inset 0px -116px 147px 0px rgba(0, 0, 0, 0.9);
    box-shadow: inset 0px -116px 147px 0px rgba(0, 0, 0, 0.9);

    transition: 250ms;

    display: flex;

    p {
      align-self: flex-end;
      text-align: center;
      width: 100%;

      font-weight: 500;
      color: white;
      font-size: 3rem;
      margin-bottom: 2rem;

      @media (max-width: 1600px) {
        font-size: 2rem;
      }
      @media (max-width: 1280px) {
        font-size: 1.5rem;
      }
    }

    &.about {
      background-image: url("./about.jpg");
    }
    &.solarium {
      background-image: url("./solarium.jpg");
    }
    &.price {
      background-image: url("./price.jpg");
    }

    &:hover {
      cursor: pointer;
      -webkit-box-shadow: inset 0px -116px 147px 96px rgba(0, 0, 0, 0.9);
      -moz-box-shadow: inset 0px -116px 147px 96px rgba(0, 0, 0, 0.9);
      box-shadow: inset 0px -116px 147px 96px rgba(0, 0, 0, 0.9);
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Solární studio JJ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_svg_white.svg" />
      </Head>
      <Script
        type="text/javascript"
        src="https://unpkg.com/default-passive-events"
      />

      <Navbar />

      <Main>
        <Hero>
          <Image
            src="/hero.jpg"
            fill
            priority
            alt="hero"
            sizes="100vw"
            style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
          />
          <div className="logo">
            <Image
              src="/logo_svg_white.svg"
              fill
              alt="logo"
              priority
              style={{ zIndex: 5 }}
              sizes="50vw"
            />
          </div>
        </Hero>
        <section className="main">
          <div className="cta">
            <div className="cta-image">
              <Image
                src="/cta-image.jpg"
                fill
                alt="cta"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 75vw,
              65vw"
              />
            </div>
            <div className="cta-text">
              <h1>Přijďte si odpočinout do našeho nového solárního studia.</h1>
              <p>
                Zažijte dokonalé opálení a získjte překrásný vzhled pokožky.{" "}
                <br />
                Navíc doplníte tělu vitamín D, který je nezbytný pro váš dobrý
                zdravotní stav.
              </p>
              <Link href="">KONTAKT</Link>
            </div>
          </div>
          <Sections>
            <Link href="/o-nas" className="card about">
              <p>O NÁS</p>
            </Link>
            <Link href="/solaria" className="card solarium">
              <p>SOLÁRIA</p>
            </Link>
            <Link href="/cenik" className="card price">
              <p>CENÍK</p>
            </Link>
          </Sections>
        </section>
      </Main>
      <Footer />
    </>
  );
}
