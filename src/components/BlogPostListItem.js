import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { BORDER_COLOR } from '../styleConstants'
import Like from './Like'
import HorizontalList from './UI/HorizontalList'
import HR from './UI/HR'

const BlogPostImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
`

function BlogPostListItem({
  className,
  excerpt,
  timeToRead,
  frontmatter: { date, title, description, image },
  fields: { slug },
}) {
  return (
    <article className={className}>
      {image && (
        <BlogPostImage className="post-image" image={image.publicURL} />
      )}
      <div className="wrapper">
        <div className="details">
          <small>
            <HorizontalList>
              {date}
              <span>{timeToRead} min</span>
            </HorizontalList>
          </small>
        </div>
        <Link className="link" to={slug}>
          <h2>{title}</h2>
          <p>{description || excerpt}</p>
        </Link>
        <HR />
        <Like />
      </div>
    </article>
  )
}

export default styled(BlogPostListItem)`
  width: 100%;
  margin: 16px 0;
  border: 1px solid ${BORDER_COLOR};
  height: 350px;
  display: flex;
  box-sizing: border-box;

  a {
    text-decoration: none;
    color: initial;
  }

  .details {
    height: 34px;
    display: flex;
    align-items: center;
  }

  .post-image {
    width: 50%;
  }

  .wrapper {
    padding: 40px;
    box-sizing: border-box;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .link {
    flex-grow: 1;
  }
`
