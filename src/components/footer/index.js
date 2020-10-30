import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import GMTLogo from "../../images/svg/GMT_Logo.svg"
import ButtonLink from '../buttonLink'

const Footer = ({ }) => {
  return (
    <>
    <StyledFooter>
        
      <GMTLogo />
      <p>

      © {new Date().getFullYear()}, Built by <a href="https://www.github.com/yonny23">Yonatan</a> and <a href="https://www.github.com/robdrosenberg">Robert</a>
      </p>
      
      <NavLinks>
        <Link to="/services">Services</Link>
        <Link to="/contactus">Contact Us</Link>
      </NavLinks>
    </StyledFooter>
    </>
  )
}

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

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  
  p {
    margin-bottom: 0;
    font-size: 1.2rem;
  }

`

export default Footer
