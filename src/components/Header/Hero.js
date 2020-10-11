import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

function Hero({ className, title, tagline }) {
  return (
    <div className={className}>
      <div className="content">
        <h1>{title}</h1>
        <p>{tagline}</p>
      </div>
    </div>
  )
}

export default styled(Hero)`
  background-image: url(/hero.jpg);
  background-position: center;
  background-size: cover;
  height: 480px;
  color: #fff;
  display: flex;
  justify-content: center;

  .content {
    max-width: 940px;
    width: 100%;
    margin: 0 20px;
  }

  h1 {
    font-weight: 200;
    text-transform: uppercase;
    font-size: 72px;
  }

  p {
    font-size: 20px;
  }
`
