/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            backgroundClip: `borderBox`,
            color: `white`,
            margin: `0 auto`,
            maxWidth: 4096,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            display: `flex`,
            flexFlow: `column`,
          }}
        >
          <main>{children}</main>
          <footer style={{position: `relative`, bottom: 0, left: 0}}>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
