import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import background from "../assets/sky.jpg";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      style={
        { 
          width: `100%`, minHeight: `100VH`,
          backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'bottom',
          padding: '70px 70px 20px 120px'
        }
      }
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          margin-left: 20px;
        `}
      >
        About
      </Link>
      <Link
        to={`/dashboard/`}
        css={css`
          float: right;
          margin-left: 20px;
        `}
      >
        Dashboard
      </Link>
      <Link
        to={`/`}
        css={css`
          float: right;
        `}
      >
        Home
      </Link>
      {children}
    </div>
  )
}