import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FONT_COLOR } from '../../styleConstants'

const Bullet = styled.div`
  display: inline-block;
  width: 2px;
  height: 2px;
  background-color: ${FONT_COLOR};
  margin: 0 8px;
`

function HorizontalList({ className, children }) {
  return (
    <li className={className}>
      {children.map((node, index) => (
        <Fragment key={index}>
          {node}
          {index < children.length - 1 && <Bullet />}
        </Fragment>
      ))}
    </li>
  )
}

export default styled(HorizontalList)`
  list-style: none;
  display: flex;
  align-items: center;
`
