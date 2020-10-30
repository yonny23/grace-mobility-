import React from "react"
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const ButtonLink = ({ href, text, to }) => {
  if (to) {
    return (
      <StyledLink to={to}>{text}</StyledLink>
    )
  } else {
    return (
      <StyledA href={href}>{text}</StyledA>
    )
  }
}

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #B50000;
  color: #FFFFFF;
  text-decoration: none;
  padding: 13px 40px;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    background-color: #a20000;
    transform: scale(1.1);
    transition: transform .75s;
  }
`
const StyledA = styled.a`
  display: inline-block;
  background-color: #B50000;
  color: #FFFFFF;
  text-decoration: none;
  padding: 13px 40px;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    background-color: #a20000;
    transform: scale(1.1);
    transition: transform .75s;
  }
`

export default ButtonLink