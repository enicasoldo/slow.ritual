import React from 'react'
import InstaPost from './InstaPost'
import Grid from './UI/Grid'

function InstaPostGrid({ className, posts }) {
  return (
    <Grid columns={3}>
      {posts.map(post => (
        <InstaPost key={post.id} {...post} />
      ))}
    </Grid>
  )
}

export default InstaPostGrid
