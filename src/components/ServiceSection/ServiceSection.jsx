import React from 'react'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import Item, {
  ServiceContainer,
  Service, Description, Round, Img, ItemWrapper
} from './StyledServiceSection'
import supportImg from '../../images/services/support.png'
import accountImg from '../../images/services/account.png'
import savingsImg from '../../images/services/savings.png'

const ServiceSection = () => (
  <ServiceContainer>
    <Container>
      <Wrapper>
        <ItemWrapper>
          <Item>
            <Round>
              <Img src={supportImg} alt="headphones" />
            </Round>
            <Service>Product Support</Service>
            <Description>
              Up to 3 years on-site warranty available for your peace of mind.
            </Description>
          </Item>
          <Item>
            <Round>
              <Img src={accountImg} alt="user icon" />
            </Round>
            <Service>Personal Account</Service>
            <Description>
              With big discounts, free delivery and a dedicated support specialist.
            </Description>
          </Item>
          <Item>
            <Round>
              <Img src={savingsImg} alt="price tag" />
            </Round>
            <Service>Amazing Savings</Service>
            <Description>
              Up to 70% off new Products, you can be sure of the best our price.
            </Description>
          </Item>
        </ItemWrapper>
      </Wrapper>
    </Container>
  </ServiceContainer>
)

export default ServiceSection
