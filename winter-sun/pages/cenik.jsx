import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const Main = styled.main`
  margin-top: 8rem;

  width: 100%;
  height: auto;
  min-height: 100vh;

  background-image: url("./background.svg");
  background-size: cover;
  background-position: top;

  .cenik {
    width: calc(100% - 16rem);
    @media (max-width: 1280px) {
      width: calc(100% - 8rem);
    }
    @media (max-width: 900px) {
      width: calc(100% - 4rem);
    }
    height: auto;
    margin: auto;
    margin-bottom: 8rem;

    h1 {
      color: #f761a6;
      font-size: 4rem;
      font-weight: 600;
      text-align: center;
    }
    h2 {
      color: #f761a6;
      text-align: center;
    }

    .since {
      text-align: center;
      font-size: 1.5rem;
      color: gray;
      font-weight: 300;
    }

    .perm {
      width: 100%;
      height: auto;
      margin: 4rem auto;

      max-width: 480px;

      display: flex;
      flex-direction: column;
      gap: 2rem;

      p {
        font-size: 1.5rem;
        font-weight: 500;
        color: #606060;
        text-align: center;

        margin: auto;
        text-align: center;

        span {
          color: #f761a6;
          font-weight: 700;
        }
      }
    }

    p.one {
      margin: 0.5rem auto;
      max-width: 560px;
      text-align: center;

      color: #606060;

      span.dark {
        font-weight: bold;
      }
      span.pink {
        font-weight: bold;
        color: #f761a6;
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Ceník - Solární studio JJ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo_svg_white.svg" />
      </Head>
      <Script
        type="text/javascript"
        src="https://unpkg.com/default-passive-events"
      />

      <Navbar />

      <Main>
        <div className="cenik">
          <h1>Ceník</h1>
          <p className="since">platné od 1.12 2022</p>
          <div className="perm">
            <p>
              <span>Permanentka</span> v hodnotě 1000 Kč, zaplatíte pouze 900
              Kč, platnost 6 měsíců.
            </p>
            <p>
              <span>Permanentka</span> v hodnotě 1500 Kč, zaplatíte pouze 1300
              Kč, platnost 7 měsíců.
            </p>
            <p>
              <span>Permanentka</span> v hodnotě 2000 Kč, zaplatíte pouze 1700
              Kč, platnost 8 měsíců.
            </p>
            <p>
              <span>Permanentka</span> v hodnotě 2500 Kč, zaplatíte pouze 2000
              Kč, platnost 9 měsíců.
            </p>
            <p>
              <span>Permanentka</span> v hodnotě 3000 Kč, zaplatíte pouze 2300
              Kč, platnost 10 měsíců.
            </p>
            <p>
              <span>Permanentka</span> v hodnotě 3500 Kč, zaplatíte pouze 2600
              Kč, platnost 11 měsíců.
            </p>
            <p>
              <span>Permanentka</span> v hodnotě 4000 Kč, zaplatíte pouze 2800
              Kč, platnost 12 měsíců.
            </p>
          </div>
          <h2>Cena solárií při jednorázové návštěvě</h2>
          <p className="one">
            <span className="dark">Ergoline Excellence 900 Turbo Power</span> -
            Hybrid Performance - <span className="pink">21 Kč/min</span>
          </p>
          <p className="one">
            <span className="dark">Ergoline Evolution 600 Turbo Power</span> -
            Rainbow Light - <span className="pink">19 Kč/min</span>
          </p>
        </div>
      </Main>
      <Footer />
    </>
  );
}
