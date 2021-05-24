import {React} from 'react'
import PropTypes from 'prop-types';
import { SubTitle, Title, Wrapper } from './ContentWrapperStyled';

const ContentWrapper = ({title, subTitle, children}) => (
  <Wrapper>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
    {children}
  </Wrapper>
)

ContentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default ContentWrapper