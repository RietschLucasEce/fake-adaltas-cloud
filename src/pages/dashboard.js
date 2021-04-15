import React from "react"
import { graphql, Link } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import CenteredGrid from "../components/centered-grid"
import { rhythm } from "../utils/typography"

export default function Dashboard({ data }) {
  return (
    <Layout>
      <h1>Dashboad</h1>
      <p>
        This is a fake adaltas.cloud replica implemented on gatsby.
      </p>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <CenteredGrid style={{ width: '40%'}} >
            <Link to={node.fields.slug} style={{ textDecoration: 'none', color: 'inherit' }} >
              <div key={node.id} style={
                { 
                  boxShadow: '1px 1px 30px 0 #000', padding: '20px 20px 20px 20px', 
                  marginBottom: '30px',
                  backdropFilter: 'blur(0.3em)'
                }
              }>            <h3
                  css={css`
                    margin-bottom: ${rhythm(1 / 4)};
                  `}
                >
                  {node.frontmatter.title}{" "}
                  <span
                    css={css`
                      color: #555;
                    `}
                  >
                    — {node.frontmatter.section}
                  </span>
                </h3>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          </CenteredGrid>
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___section], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            section
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`