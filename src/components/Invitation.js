import React from "react"

//import { Row, Col } from "reactstrap"
import styled from "styled-components"

import meetpoints from "../../static/meetpoints.jpg"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: #5b5b5b;
  margin: 0px auto;
  z-index: 0;`


const Rectangle = styled.img`
display:flex;
position: absolute;
width: 60%;
height: 600px;
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
        <Rectangle src={meetpoints}/>      
      </Container>
    </>
  )
}
