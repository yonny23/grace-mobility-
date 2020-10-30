import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import GMTLogo from "../images/svg/GMT_Logo.svg"
import styled from '@emotion/styled'

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <NavContainer>
      <Link to="/">
        <GMTLogo />
      </Link>
      <NavLinks>
        <Link to="/services">Services</Link>
        <Link to="/contactus">Contact Us</Link>
      </NavLinks>
    </NavContainer>
  </StyledHeader>
)

const StyledHeader = styled.header`
  margin: 2.8rem 5rem;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLinks = styled.div`
  a {
    font-family: "Roboto";
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
    &:not(:last-child) {
      margin-right: 3rem;
      
    }
    &:hover {
      color: #B50000;
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
