import React from 'react'
import styled from 'styled-components'
import { INVERTED_FONT, OVERLAY_BG_COLOR } from '../styleConstants'

function InstaPost({ className, caption, preview }) {
  return (
    <div className={className}>
      <img src={preview} />
      <div className="overlay">
        <p>{caption}</p>
      </div>
    </div>
  )
}

export default styled(InstaPost)`
  position: relative;
  display: flex;

  .overlay {
    opacity: 0;
    transition: opacity 0.2s;
    background-color: ${OVERLAY_BG_COLOR};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: ${INVERTED_FONT};
    display: flex;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
  }

  .overlay p {
    text-align: center;
    max-height: 100%;
    width: 100%;
    font-size: 18px;
    line-height: 32px;
    overflow: hidden;
  }

  :hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
  }
`
