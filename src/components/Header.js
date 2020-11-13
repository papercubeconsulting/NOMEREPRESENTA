import React from "react";



//import { Row, Col } from "reactstrap"
import styled from "styled-components"

import mainGIF from "../../static/bandera.gif"
import photoGIF from "../../static/bandera1.png"

const Container = styled.div`
  position: relative;
  display:flex;
  width: 100%;
  height: 1200px;
  background: #ffffff;
  z-index: 0;
  justify-content:center;

  `


const Rectangle = styled.img`
display:flex;
position: relative;
width: 600px;
height: 857px;
top: 50px;
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
        <Rectangle src={mainGIF} alt={photoGIF}/>
      </Container>
    </>
  )
}
