import React, { useEffect } from 'react'
import {Container} from '../common/Container';
import Heading from '../common/Heading/Heading';
import data from './ContentForAboutUs'
import {
  Flex, Section, ContentContainer, SectionTitle, SectionContent, SectionImg, Img,
  Image, ContentBlock, Text, ComponentContainer
}
  from './StyledAboutUs';

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Container>
        <Heading>About Us</Heading>
      </Container>
      <ComponentContainer>
        <Flex className="container">
          {data.map((item, i) => {
            const section = item;
            if (i % 2 === 0) {
              return (
                <Section key={section.id} colored className="section">
                  <Container>
                    <ContentBlock colored>
                      <ContentContainer colored className="content">
                        {section.icon === null ? '' : <Img src={section.icon} alt="logo" /> }
                        <SectionTitle className="section-title">
                          <p>
                            {section.title}
                          </p>
                          <p>{section.subtitle}</p>
                        </SectionTitle>
                        <SectionContent className="section-content">
                          <Text>{section.content}</Text>
                          <p>{section.subcontent}</p>
                        </SectionContent>
                      </ContentContainer>
                      <SectionImg>
                        <Image src={section.img} first={i === 0} alt="computer" />
                      </SectionImg>
                    </ContentBlock>
                  </Container>
                </Section>
              )
            }
            return (
              <Section key={section.id}>
                <Container>
                  <ContentBlock>
                    <SectionImg nocolored>
                      <Image src={section.img} alt="computer" />
                    </SectionImg>
                    <ContentContainer className="content">
                      <Img biggerSize={section.biggerSize === 'ok'} iconSize={section.iconSize} src={section.icon} alt="logo" />
                      <SectionTitle className="section-title">
                        <p>{section.title}</p>
                      </SectionTitle>
                      <SectionContent className="section-content">
                        <Text>{section.content}</Text>
                        <p>{section.subcontent}</p>
                      </SectionContent>
                    </ContentContainer>
                  </ContentBlock>
                </Container>
              </Section>
            )
          })}
        </Flex>
      </ComponentContainer>
    </div>
  )
}

export default AboutUsPage;