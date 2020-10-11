import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const HeartIcon = ({ solid }) => (
  <FontAwesomeIcon color="#e84a43" icon={solid ? fasHeart : faHeart} />
)

const LikesCount = styled.small`
  margin-right: 4px;
`

export default function Like({ likes = 1, liked = true }) {
  return (
    <span>
      {likes && <LikesCount>{likes}</LikesCount>}
      <HeartIcon solid={liked} />
    </span>
  )
}
