import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import tw from 'twin.macro'

import Layout from "../components/layout"
import SEO from "../components/seo"

const mainStyles = tw`py-4 text-uconn-blue`

const MainContent = styled.div`
  ${mainStyles}
`

export default () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      wordpressPage (
        slug: {
          eq: "excellence"
        }
      ) {
        content
      }

      wpcontent {
        pages(where: {name: "excellence"}) {
          edges {
            node {
              title(format: RENDERED)
              content(format: RENDERED)
              blocksJSON
            }
          }
        }
      }
    }
  `)

  console.log(data, 'test')
  
  // method to get gutenberg block content data
  const blocks = JSON.parse(data.wpcontent.pages.edges[0].node.blocksJSON)
  console.log(blocks, 'blocks')

  return (
    <Layout>
      <SEO title={`UConn ${data.wordpressPage.title}`} />
      <MainContent
        dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}
      >
      </MainContent>
    </Layout>
  )
}
