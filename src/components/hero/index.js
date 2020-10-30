import React from "react"
import styled from '@emotion/styled'

import Van from './vanPhoto.jpg'
import ButtonLink from '../buttonLink'

const Hero = ({ }) => {
  return (
      <HeroContainer>
        <HeroImg src={Van} alt="Transport Van with a wheel chair lift" />
        <HeroContent>
          <HeroHeading>
            <HeroSpan>Hospital</HeroSpan> <br />
            <HeroSpan>Transportation You</HeroSpan> <br />
            <HeroSpan>Can Depend On</HeroSpan></HeroHeading>
          <ButtonContainer>
            <ButtonLink to="/contact-us" text="Contact Us" />
            <ButtonLink to="#learn-more" text="Learn More" />
          </ButtonContainer>
        </HeroContent>
      </HeroContainer>
  )
}

const HeroContainer = styled.div`
  margin-top: 6rem;
`

const HeroImg = styled.img`
  width: 100%; 
  position: relative;
  padding-left: 20rem;
`

const HeroContent = styled.div`
  width: 700px;
  position: absolute;
  top: 25%;
  left: 50px;
`

const HeroHeading = styled.h1`
  font-size: 6.2rem;
  line-height: 73px;
  font-weight: 600;
  width: 650px;
  text-transform: capitalize;
  
`
const HeroSpan = styled.span`
  background-color: white;
  padding-right: 2rem;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 52%;
  margin-top: 7rem;
`

export default Hero
