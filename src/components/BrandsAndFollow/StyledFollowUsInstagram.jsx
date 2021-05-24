import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const Flex = styled.div`
  display: none;
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`
const BlockTitle = styled.p`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    justify-content: start;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
  }
`
const Posts = styled.div`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    flex-wrap: wrap;
    margin-top: 21px;
  }
`
const PostBox = styled.div`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: coloumn;
    justify-content: center;
    width: calc(100% / 6.5 );
    margin: 0 0 6% 1%;
  }
`
const Image = styled.a`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    overflow: hidden;
    height: 45%;
    margin-left: 5px;
  }
`
const PostContent = styled.a`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    padding: 10px 15px;
    color: #000000;
  }
`
const PostDate = styled.p`
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    justify-content: center;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    color: #8C8C8C;
  }
`
export
{
  Flex, BlockTitle, Posts, PostBox, Image, PostContent, PostDate
};
