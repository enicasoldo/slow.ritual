import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { NAV_COLOR, NAV_HEIGHT } from '../../styleConstants'

const StaticNav = styled.div`
  height: ${NAV_HEIGHT}px;
`

function Nav({ className }) {
  return (
    <>
      <nav className={className}>
        <Link to="/">Home</Link>
        <Link to="/">Blog</Link>
        <Link to="/">
          Instagram <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </nav>
      <StaticNav />
    </>
  )
}

export default styled(Nav)`
  background-color: ${NAV_COLOR};
  height: ${NAV_HEIGHT}px;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  box-sizing: border-box;

  a {
    text-decoration: none;
    padding: 0 10px;
    color: initial;
    font-size: 14px;
  }

  svg {
    margin-left: 4px;
  }
`
