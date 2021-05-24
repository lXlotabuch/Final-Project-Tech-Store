import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const ComponentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 320px;
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`
export const Section = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
  background-color: ${(props) => (props.colored ? 'black' : 'white')};

  @media(min-width: ${forTablet.minWidth}) and (max-width: ${forTablet.maxWidth}px) {
    justify-content: center;
    align-items: center;
  }

  @media(min-width: ${forDesktop.minWidth}px){
    justify-content: center;
    align-items: center;
  }
`
export const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.colored ? 'column-reverse' : 'column')};
  color: ${(props) => (props.colored ? 'white' : 'black')};

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 39px 5% 48px 5%;
    
    @media(min-width: 481px) and (max-width: 700px) {
      width: 100%;
      flex-direction: ${(props) => (props.colored ? 'column-reverse' : 'column')};
      color: ${(props) => (props.colored ? 'white' : 'black')};
      justify-content: center;
      align-items: center;
      padding: 0 0 10px 0;
    }
  }

  @media(min-width: ${forDesktop.minWidth}px){
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 6% 50px 5%;;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 17px 2% 25px 15%;
  justify-content: center;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 45%;
    margin-right: ${(props) => (props.colored ? '3%' : '5%')};
    margin-left: ${(props) => (props.colored ? '5%' : '3%')};
  
    @media(min-width: 481px) and (max-width: 700px) {
      width: 80%;
      margin: 17px 3% 25px 7%; 
    }
  }

  @media(min-width: ${forDesktop.minWidth}px){
    width: 48%;
    margin-right: ${(props) => (props.colored ? '1%' : '0')};
    margin-left: ${(props) => (props.colored ? '0' : '10%')};
    padding-left: 5%;
  }
`
export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  font-size: 30px;
  margin: 5px 0 13px 0;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {

    @media(min-width: 481px) and (max-width: 700px) {
      width: 95%;
      font-size: 30px;
    }
  }

  @media(min-width: ${forDesktop.minWidth}px){
    width: 90%;
    font-size: 32px;
    margin-bottom: 32px;
  }
`
export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
  width: 100%;

    @media(min-width: 481px) and (max-width: 700px) {
      width: 100%;
      font-size: 14px;
    }
  }

  @media(min-width: ${forDesktop.minWidth}px){
    width: 85%;
    font-size: 16px;
    line-height: 22px;
  }
`
export const SectionImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30%;
  object-fit: cover;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 60%;
    width: 48%;
    margin-right: ${(props) => (props.nocolored ? '0' : '7%')};
    margin-left: ${(props) => (props.nocolored ? '2%' : '0')};
    padding-left: ${(props) => (props.nocolored ? '2%' : '2%')};

    @media(min-width: 481px) and (max-width: 700px) {
      height: 50%;
      width: 100%;
      padding-left: 0;
      margin-right: 0;
    }
  } 

  @media(min-width: ${forDesktop.minWidth}px){
    width: 48%;
    height: 60%;
    padding-left: ${(props) => (props.nocolored ? '2%' : '1%')};
  }
`
export const Image = styled.img`
  object-fit: cover;
  margin-top: ${(props) => (props.first ? '0' : '25px')};
  display: flex;
  flex-direction: row;
  width: ${(props) => (props.first ? '100%' : '50%')};
  height: ${(props) => (props.first ? '100%' : '50%')};
  
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 100%;
    height: auto;
    
    @media(min-width: 481px) and (max-width: 700px) {
      margin-top: ${(props) => (props.first ? '0' : '15px')};
      width: ${(props) => (props.first ? '100%' : '50%')};
      height: ${(props) => (props.first ? '100%' : '50%')};
      object-fit: cover;
    }
  } 

 @media(min-width: ${forDesktop.minWidth}px){
    width: ${(props) => (props.first ? '80%' : '100%')};
    height: auto;
    object-fit: ${(props) => (props.first ? 'none' : 'cover')};
  }
`
export const Img = styled.img` 
  height: 30px;
  width: ${(props) => (props.biggerSize ? '52px' : '30px')};

  @media(min-width: ${forDesktop.minWidth}px){
    width: ${(props) => (props.biggerSize ? '87px' : '50px')};
    height: 50px;
    margin-bottom: 10px;
  }
`
export const Text = styled.p`
  margin-bottom: 20px;
`