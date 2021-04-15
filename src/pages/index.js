import React from "react"
import { css } from "@emotion/react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div align="center" style={{ marginTop: '100px' }}>
        <h1
          css={css`
            display: inline-block;
          `}
        >
          Welcome !
        </h1>
        <h4>Please sign in to access the files</h4>
        <Link to={`/dashboard`}>
        <h5 style={{ padding: '10px 50px 10px 50px', border: 'solid', display: 'inline-block'}}>
          Sign in
        </h5>
      </Link>
      </div>
    </Layout>
  )
}