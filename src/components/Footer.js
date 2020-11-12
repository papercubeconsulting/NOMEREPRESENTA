import React from "react"
import styled from "styled-components"

//react icons
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGlobal,
} from "react-icons/ai"
import { IconContext } from "react-icons"

const PostFooter = styled.div`
  width: 100%;
  background-color: #262626;
  padding: 2rem;
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const Copyrigth = styled.div`
  width: 100%;
  margin-top: 1rem;
  font-size: 14px;
  line-height: 1.5;
  color: #767b8a;
  @media (min-width: 800px) {
    width: 70rem;
  }
`

const Social = styled.div`
  width: 100%;
  margin-top: 1rem;
  font-size: 14px;
  line-height: 1.5;
  color: #767b8a;
  display: flex;
  justify-content: center;
  @media (min-width: 800px) {
    width: 20rem;
    justify-content: space-around;
  }
`

export default function Footer() {
  /*Aca iria la conexion al servicio para mandar correo */
  return (
    <footer>
      
      <PostFooter>
        <Copyrigth>
          hecho por © Papercube Consulting SAC para todos los peruanos. Lima, Perú 2020
        </Copyrigth>
        <Social>
          <IconContext.Provider
            value={{ color: "white", size: "2.5em", className: "social_icon" }}
          >
           <a href="https://papercube.pe/">
           <AiOutlineGlobal/>
            </a>
            <a href="https://www.linkedin.com/company/papercube">
              <AiOutlineLinkedin />
            </a>
            <a href="https://www.facebook.com/papercube">
              <AiOutlineFacebook />
            </a>
            <a href="https://www.instagram.com/papercube_consulting/?hl=es-la">
              <AiOutlineInstagram />
            </a>
            
            
          </IconContext.Provider>
        </Social>
      </PostFooter>
    </footer>
  )
}
