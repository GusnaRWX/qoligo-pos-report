import { Button } from "@mui/material"
import React from "react"
import Layout from "@/components/core/Layout/Index"
import styled from "@emotion/styled"
import { MAIN_IMAGE } from "@/utils/assetsConstant"
import Image from "next/image"

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 2rem;
 align-items: center;
 justify-content: center;
 width: 100%;
 color: #611596;
`
export default function Home () {
  return (
    <>
      <Layout>
        <Wrapper>
          <h2>WELCOME TO QOLIGO POS REPORT</h2>
          <Image
            src={MAIN_IMAGE}
            alt='main-image'
            width={500}
            height={500}
          />
        </Wrapper>
      </Layout>
    </>
  )
}
