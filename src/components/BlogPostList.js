import React from 'react'
import styled from 'styled-components'
import BlogPostListItem from './BlogPostListItem'

function BlogPostList({ className, posts }) {
  return (
    <div className={className}>
      {posts.map(post => (
        <BlogPostListItem key={post.id} {...post} />
      ))}
    </div>
  )
}

export default styled(BlogPostList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`
