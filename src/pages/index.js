import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import BlogPostList from '../components/BlogPostList'
import InstaPostGrid from '../components/InstaPostGrid'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title
  const siteTagline = data.site.siteMetadata?.description
  const posts = data.allMarkdownRemark.nodes
  const instaPosts = data.allInstaNode.nodes

  return (
    <Layout location={location} title={siteTitle} tagline={siteTagline}>
      <SEO title={siteTitle} description={siteTagline} />
      {posts.length ? (
        <BlogPostList posts={posts} />
      ) : (
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      )}
      <InstaPostGrid posts={instaPosts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        excerpt
        id
        timeToRead
        frontmatter {
          date(formatString: "MMM DD")
          title
          description
          image {
            publicURL
          }
        }
      }
    }
    allInstaNode(sort: { fields: [timestamp], order: DESC }) {
      nodes {
        id
        caption
        preview
      }
    }
  }
`
