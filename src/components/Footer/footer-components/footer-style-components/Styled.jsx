import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Form, Input } from 'antd';
import { forTablet, forDesktop } from '../../../../styles/mediaBreakPoints'

export const Content = styled.div`
  padding: 10px 0 10px 10px;
  background: #000000;
  display: none;
  a {
    outline: none;
  }

@media(min-width: ${forDesktop.minWidth}px){
  display: block;
  padding: 10px 0 0 0;
}
`

export const Accordion = styled.div`
  background: #000000;
`
export const FooterAdressLink = styled.a`
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  align-items: center;
  color: 00008B;

@media(min-width: ${forDesktop.minWidth}px){
  font-weight: 400;
}
`

export const FooterTextContacts = styled.p`
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  align-items: center;
  padding-top: 5px;

@media(min-width: ${forDesktop.minWidth}px){
  font-size: 13px;
}
`

export const FooterLinkItem = styled(Link)`
  font-size: 12px;
  font-style: normal;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  display: block;
  padding-top: 5px;

@media(min-width: ${forDesktop.minWidth}px){
  font-size: 13px;
  padding-left: 0;
}
`

export const FooterLinksTitle = styled.label`
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  padding: 14px 0;  
  display: block;
  cursor: pointer;
  position: relative;
  transition: 0.1s;

&:hover {
  background: rgba(0, 0, 0, 0.1);
}

&::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 40px;
  width: 12px;
  height: 6px;
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
  background-size: contain;
  transition: transform 0.4s;
  }


@media(min-width: ${forDesktop.minWidth}px){
  font-size: 16px;
  cursor: text;

  &::after{
    display: none;
  }
  }
`

export const FooterStyledText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  text-align: left;

@media(min-width: ${forDesktop.minWidth}px){
  font-size: 14px;
}
`

export const FooterTitle = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: #FFFFFF;
  padding-top: 22px;

@media(min-width: ${forDesktop.minWidth}px){
  font-size: 38px;
}
`

export const FooterTitleText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  align-items: center;

@media(min-width: ${forDesktop.minWidth}px){
  font-size: 16px;
}
`

export const StyledCheckBox = styled.input`
  display: none;

  &:checked ~ div {
    display: block;
  }

  &:checked ~ label::after {
    transform: translateY(-50%) rotate(0.5turn);
  }
`

export const LineMobile = styled.div`
  width: 100%;
  height: 2px;
  display: block;
  background: #FFFFFF;
  opacity: 0.2;
  text-align: center;

@media(min-width: ${forDesktop.minWidth}px){
  display: none;
}
`

export const StyledFooter = styled.footer`
  font-size: 12px;
  line-height: 1.5;
  background-color: #000000;
  color: #FFFFFF;

@media(min-width: ${forDesktop.minWidth}px){    
  font-size: 13px;
}
`

export const StyledInput = styled(Input)`
  background-color: #000000;
  border: 1px solid #FFFFFF;
  width: 100%;
  height: auto;
  transform: translateY(35%);
  font-size: 12px;
  padding: 10px 10px;
  color: #FFFFFF;

  &:focus{
    background-color: #FFFFFF;
    color: #000000;
  }

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
  width: 90%;
  transform: translateY(0);
  font-size: 14px;
  margin: 25px 23px 0 0; 
}

@media(min-width: ${forDesktop.minWidth}px){
  width: 391px;
  margin: 25px 23px 0 0;
  transform: translateY(0);
  font-size: 14px;
}
`

export const StyledPaymentWrapper = styled.div`
  grid-area: payment;
  text-align: center;
  padding-top: 7px;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
  text-align: center; 
}

@media(min-width: ${forDesktop.minWidth}px){
  transform: translateX(12%);
}
`

export const StyledSection = styled.section`
  padding-top: 35px;

@media(min-width: ${forDesktop.minWidth}px){
  padding-top: 45px;
}
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

@media(min-width: ${forDesktop.minWidth}px){
  flex-direction: row;
  justify-content: space-between;
  margin: 35px 0 35px 0;
}
`

export const StyledWrapperFooter = styled.div`
  display: grid;
  grid-template-areas: 
    "social copyright"
    "payment payment";
  padding: 10px 0 10px 0;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
  padding-bottom: 14px;
  grid-template-areas: 
    'social payment copyright'
}

@media(min-width: ${forDesktop.minWidth}px){
    padding-bottom: 14px;
    grid-template-areas: 
      'social payment copyright'
}
`

export const StyledWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 16px;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;
}

@media(min-width: ${forDesktop.minWidth}px){
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;
}
`

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  align-items: center;
  text-align: right;
  opacity: 0.6;
  margin-top: 8px;
  grid-area: copyright;

@media(min-width: ${forDesktop.minWidth}px){
  font-size: 12px;
  color: #FFFFFF;
  opacity: 0.6;
}
`

export const Line = styled.div`
  display: none;

@media(min-width: ${forDesktop.minWidth}px){
  width: 100%;
  height: 2px;
  display: block;
  background: #FFFFFF;
  opacity: 0.2;
  margin-bottom: 15px;
  text-align: center;
}
`

export const Wrapper = styled.div`
  display: flex;
  font-size: 22px;
  grid-area: social;

@media(min-width: ${forDesktop.minWidth}px){
  padding: 15px, 20px, 50px, 0;
}
`

export const SocialNetwotkLink = styled.a`
  font-size: 22px;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 10px;
`

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`