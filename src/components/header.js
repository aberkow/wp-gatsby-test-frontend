import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import tw from 'twin.macro'

const headerStyles = tw`font-bold px-4 text-uconn-red`
console.log(headerStyles);

const StyledHeader = styled.header`
  ${headerStyles}
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
