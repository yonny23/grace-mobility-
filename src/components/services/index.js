import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

const ServiceSection = () => (
  <Services>
    <ServicesH1>Services</ServicesH1>
    <ServicesContainer>
      <div>
        <ServiceImage src="http://placekitten.com/230/200" alt=""/>
        <ServicesH3>Experienced Drivers</ServicesH3>
        <ServiceParagraph>We make sure to vet all our drivers so all you have to worry about is what you’re going to do when you get home! </ServiceParagraph>
      </div>
      <div>
        <ServiceImage src="http://placekitten.com/230/200" alt=""/>
        <ServicesH3>Ride in comfort</ServicesH3>
        <ServiceParagraph>All of our vehicles are well equiped to make your ride as comfortable as possible no matter the circumstance.</ServiceParagraph>
        </div>
      <div>
        <ServiceImage src="http://placekitten.com/230/200" alt=""/>
        <ServicesH3>Always On Time</ServicesH3>
        <ServiceParagraph>We’ll be ready to pick you up ASAP. Our drivers  will make sure your ride is as quick and painless as possible to get you where you need to be when you need to be.</ServiceParagraph>
      </div>
    </ServicesContainer>
  </Services>

)

const Services = styled.div`
    margin: 15rem 0;
`
const ServicesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`
    
const ServicesH1 = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  margin-bottom: 6rem;
`
const ServicesH3 = styled.h3`
  font-size: 3.6rem;
  text-align: center;
  margin-bottom: 2rem;
`
const ServiceImage = styled.img`
  margin-bottom: 2rem;
`

const ServiceParagraph = styled.p`
    font-size: 1.6rem;
    max-width: 300px;

`

export default ServiceSection