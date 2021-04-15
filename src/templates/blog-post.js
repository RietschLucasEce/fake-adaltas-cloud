import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h4 style={{color: '#555', fontStyle: 'italic'}}>{post.frontmatter.section}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        section
      }
    }
  }
`