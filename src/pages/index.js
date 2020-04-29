import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      wordpressPage (
        slug: {
          eq: "excellence"
        }
      ) {
        title
        content
      }
    }
  `)

  return (
    <Layout>
      <SEO title={`UConn ${data.wordpressPage.title}`} />
      <header>
        <h1>{data.wordpressPage.title}</h1>
      </header>
      <main
        dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}
      >
      </main>
    </Layout>
  )
}
