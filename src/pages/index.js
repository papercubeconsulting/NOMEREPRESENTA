import React from "react"

import "../../static/global.css"
import Header from "../components/Header"
import MainLayout from "../components/Layouts/MainLayout"
import cacerola from "../../static/cacerola.mp3"
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  return <MainLayout>
    <Header/>
    <ReactAudioPlayer
      src="./cacerola.mp3"
      autoPlay
      controls
    />
  </MainLayout>
}
