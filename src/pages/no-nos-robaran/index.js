import React from "react"

import "../../../static/global.css"
import Invitation from "../../components/Invitation"
import MainLayout from "../../components/Layouts/MainLayout"

export default function Home() {
  return <MainLayout>
    <Invitation/>
  </MainLayout>
}
