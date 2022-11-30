import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const Main = styled.main`
  margin-top: 6rem;
  @media (max-width: 1280px) {
    margin-top: 4rem;
  }

  width: 100%;
  height: auto;
  background-image: url("./background.svg");
  background-size: cover;
  background-position: top;

  .kontakt {
    width: calc(100% - 16rem);
    @media (max-width: 1280px) {
      width: calc(100% - 8rem);
    }
    @media (max-width: 900px) {
      width: calc(100% - 4rem);
    }
    max-width: 1920px;
    margin: auto;
    padding: 4rem 0;

    display: flex;
    flex-direction: row;
    @media (max-width: 900px) {
      flex-direction: column;
    }

    gap: 4rem;

    .image {
      width: 100%;
      height: 32rem;
      border-radius: 2rem;

      -webkit-box-shadow: inset 0px 64px 300px -92px rgba(0, 0, 0, 0.9);
      -moz-box-shadow: inset 0px 64px 300px -92px rgba(0, 0, 0, 0.9);
      box-shadow: inset 0px 64px 300px -92px rgba(0, 0, 0, 0.9);

      position: relative;

      p {
        position: absolute;
        color: white;
        font-size: 2rem;
        text-align: center;
        width: 100%;
        margin-top: 1rem;
      }

      img {
        border-radius: 2rem;
        object-fit: cover;
        z-index: -1;
      }
    }
  }

  .text {
    width: calc(100% - 16rem);
    @media (max-width: 1280px) {
      width: calc(100% - 8rem);
    }
    @media (max-width: 900px) {
      width: calc(100% - 4rem);
    }
    max-width: 1920px;

    font-size: 2.5rem;
    color: #606060;
    height: auto;
    margin: auto;
    padding: 4rem 0 0 0;

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
      color: #606060;
      text-decoration: none;
      width: 100%;
    }

    span {
      font-weight: 200;
      white-space: nowrap;
    }
  }

  .time {
    width: 100%;
    height: 16rem;

    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='256' preserveAspectRatio='none' viewBox='0 0 1920 256'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1021%26quot%3b)' fill='none'%3e%3crect width='1920' height='256' x='0' y='0' fill='rgba(255%2c 190%2c 220%2c 1)'%3e%3c/rect%3e%3cpath d='M1948.197%2c93.77C1971.376%2c94.022%2c1996.383%2c91.226%2c2009.312%2c71.987C2023.556%2c50.791%2c2023.162%2c22.903%2c2010.859%2c0.525C1998.091%2c-22.699%2c1974.682%2c-40.128%2c1948.197%2c-39.175C1922.975%2c-38.268%2c1904.805%2c-17.477%2c1892.886%2c4.769C1881.749%2c25.557%2c1876.893%2c50.654%2c1889.341%2c70.684C1901.263%2c89.868%2c1925.611%2c93.525%2c1948.197%2c93.77' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M251.29 191.16 a67.99 67.99 0 1 0 135.98 0 a67.99 67.99 0 1 0 -135.98 0z' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M885.9021150013541 103.38879167039156L934.5305292918741 87.58846207082784 918.7301996923104 38.96004778030779 870.1017854017904 54.7603773798715z' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1145.76 123.75 a81.51 81.51 0 1 0 163.02 0 a81.51 81.51 0 1 0 -163.02 0z' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M635.643%2c268.248C647.185%2c268.775%2c658.976%2c263.825%2c664.521%2c253.688C669.893%2c243.866%2c666.246%2c232.273%2c660.614%2c222.598C655.026%2c213%2c646.74%2c203.641%2c635.643%2c204.084C625.004%2c204.508%2c618.83%2c215.025%2c613.899%2c224.461C609.442%2c232.991%2c606.721%2c242.622%2c611.001%2c251.242C615.759%2c260.823%2c624.957%2c267.76%2c635.643%2c268.248' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1410.547195087769-5.143887477792261L1353.3581281234951-9.142936608627878 1349.3590789926593 48.04613035564616 1406.5481459569335 52.04517948648178z' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1104.57 158.67 a55.44 55.44 0 1 0 110.88 0 a55.44 55.44 0 1 0 -110.88 0z' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1463.3803566371223 85.56261980408989L1452.979310074419 138.80043509977207 1498.0765754920785 124.14744531933135z' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1127.901%2c247.819C1150.914%2c248.116%2c1167.901%2c228.242%2c1178.32%2c207.72C1187.67%2c189.303%2c1187.727%2c167.918%2c1177.606%2c149.914C1167.268%2c131.524%2c1148.98%2c118.905%2c1127.901%2c118.032C1105.193%2c117.091%2c1081.392%2c125.524%2c1070.512%2c145.477C1059.967%2c164.816%2c1068.916%2c187.234%2c1079.69%2c206.446C1090.791%2c226.243%2c1105.206%2c247.526%2c1127.901%2c247.819' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1800.72 57.28 a74.23 74.23 0 1 0 148.46 0 a74.23 74.23 0 1 0 -148.46 0z' fill='rgba(247%2c 97%2c 166%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1021'%3e%3crect width='1920' height='256' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

    font-size: 3rem;
    @media (max-width: 1280px) {
      font-size: 2.5rem;
    }
    @media (max-width: 900px) {
      font-size: 2rem;
    }

    display: grid;
    align-items: center;
    align-content: center;

    text-align: center;

    .flex {
      margin: auto;
    }

    p {
      font-weight: 300;
      color: #f5f5f5;

      display: inline-block;
      margin: 0 auto;

      span {
        font-weight: 700;
        color: white;

        &.left {
          margin-left: 2rem;
        }
      }
    }
  }
`;

const Contact = () => {
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
        <div className="time">
          <div className="flex">
            <p>
              <span>Po - Pá:</span> 9:00 - 19:00
            </p>
            <p>
              <span className="left">So - Ne:</span> Dle objednávek
            </p>
            <p>
              <span className="left">Státní svátky:</span> Dle objednávek
            </p>
          </div>
        </div>

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
            <a href="mailto: solarnistudiojj@gmail.com">
              E-mail: <span>solarnistudiojj@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="kontakt">
          <div className="image">
            <Image src="/contact1.webp" fill sizes="50vw" />
          </div>
          <div className="image">
            <Image src="/contact2.webp" fill sizes="50vw" />
          </div>
          <div className="image">
            <Image src="/img20.jpg" fill sizes="50vw" />
            <p>Zvonek 12*</p>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Contact;
