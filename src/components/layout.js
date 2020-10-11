import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './Header/Header'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 200;
  }

  h2 {
    font-size: 22px;
    line-height: normal;
  }

  small {
    font-size: 12px;
  }

  p {
    line-height: 22.5px;
    font-size: 15px;
  }
`

const Layout = ({ className, title, tagline, children }) => {
  return (
    <div className={className}>
      <GlobalStyle />
      <Header title={title} tagline={tagline} />
      <main>{children}</main>
    </div>
  )
}

export default styled(Layout)`
  main {
    padding: 50px 0;
    max-width: 940px;
    width: calc(100% - 32px);
    margin: auto;
  }
`
