import React from "react"

//import { Row, Col } from "reactstrap"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: #5b5b5b;
  margin: 0px auto;
  z-index: 0;
`

const Card1 = styled.div`
  position: absolute;
  width: 20%;
  height: 25%;
  left: 10%;
  top: 5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 1;

  @media (max-width: 700px) {
    width: 60%;
    height: 20%;
    top: 2%;
  }
`

const ColorCard1 = styled.div`
  position: absolute;
  width: 95%;
  height: 96%;
  left: 14.41px;
  top: 14.82px;
  background: url(/images/header/header1.jpg);
  z-index: 3;
`

const ColorCard1a = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  left: 0px;
  top: 0px;
  /* verde */
  background: #0b9299;
  border-radius: 8px 0px 0px 0px;
  z-index: 2;
`

const Card2 = styled.div`
  position: absolute;
  width: 15%;
  height: 20%;
  left: 70%;
  top: 5%;
  z-index: 1;
  @media (max-width: 700px) {
    display: none;
  }
`

const ColorCard2 = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  left: 0px;
  top: 0px;

  background: url(/images/header/header2.jpg);
  z-index: 3;
`

const ColorCard2a = styled.div`
  position: absolute;
  width: 218.98px;
  height: 139.27px;
  left: 21.02px;
  top: 71.82px;

  position: absolute;
  width: 85%;
  height: 53%;
  left: 21.02px;
  top: 71.82px;

  background: #f2b531;
  border-radius: 8px 0px;
  z-index: 2;
`

const Card3 = styled.div`
  position: absolute;
  width: 24%;
  height: 26%;
  left: 13%;
  top: 57%;
  z-index: 1;

  @media (max-width: 700px) {
    display: none;
  }
`

const ColorCard3 = styled.div`
  position: absolute;
  width: 327.82px;
  height: 238.99px;
  left: 0px;
  top: 0px;

  position: absolute;
  width: 90%;
  height: 90%;
  left: 0px;
  top: 0px;

  background: url(/images/header/header3.jpg);
  z-index: 3;
`

const ColorCard3a = styled.div`
  position: absolute;
  width: 318.89px;
  height: 173.51px;
  left: 21.61px;
  top: 77.49px;

  position: absolute;
  width: 87%;
  height: 60%;
  left: 21.61px;
  top: 77.49px;

  background: #ec5959;
  border-radius: 8px 0px;
  z-index: 2;
`

const Card4 = styled.div`
  position: absolute;
  width: 30%;
  height: 25%;
  left: 67%;
  top: 59%;
  z-index: 1;
  @media (max-width: 700px) {
    left: auto;
    right: 5%;
    width: 60%;
    height: 23%;
  }
`

const ColorCard4 = styled.div`
  position: absolute;
  width: 549.81px;
  height: 299.55px;
  left: 15.19px;
  top: 14.45px;

  position: absolute;
  width: 90%;
  height: 90%;
  left: 15.19px;
  top: 14.45px;

  background: url(/images/header/header4.jpg);
  z-index: 3;
`

const ColorCard4a = styled.div`
  position: absolute;
  width: 487.86px;
  height: 236.63px;
  left: 0px;
  top: 0px;

  position: absolute;
  width: 80%;
  height: 80%;
  left: 0px;
  top: 0px;

  background: #68c6a4;
  border-radius: 8px 0px 0px 0px;
  z-index: 2;
`
const Rectangle = styled.div`
display:flex;
position: absolute;
width: 60%;
height: 506px;
left: 20%;
top: 104px;
justify-content: center; 
align-items:center;
align-content:center;
/* bg light */

  background: #f6f9fb;
  border-radius: 32px;
  z-index: 0;



  @media (max-width: 700px) {
    width:90%;
    left: 5%;}

`

const Text = styled.h1`
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 150.3%;
  width: 80%;
  margin: 0px auto 20px auto;
  text-align: center;
  letter-spacing: 0.055em;
  color: #303030;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`

const TextGreen = styled.strong`
  color: #0b9299;
`

export default function Header() {
  return (
    <>
      <Container>
        <Card1
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-duration="1000"
          data-sal-easing="ease-in-out"
        >
          <ColorCard1></ColorCard1>
          <ColorCard1a></ColorCard1a>
        </Card1>

        <Card2
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-duration="800"
          data-sal-easing="ease-in-out"
        >
          <ColorCard2></ColorCard2>
          <ColorCard2a></ColorCard2a>
        </Card2>

        <Card3
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-duration="800"
          data-sal-easing="ease-in-out"
        >
          <ColorCard3></ColorCard3>
          <ColorCard3a></ColorCard3a>
        </Card3>

        <Card4
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-duration="800"
          data-sal-easing="ease-in-out"
        >
          <ColorCard4></ColorCard4>
          <ColorCard4a></ColorCard4a>
        </Card4>

        <Rectangle>
          <Text
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-duration="1000"
            data-sal-easing="ease-in-out"
          >
            ¿QUIERES SER PARTE DE LA PROXIMA GENERACION DE
            <TextGreen> DATA SCIENTISTS DEL PERU?</TextGreen>{" "}
          </Text>
        </Rectangle>
      </Container>
    </>
  )
}
