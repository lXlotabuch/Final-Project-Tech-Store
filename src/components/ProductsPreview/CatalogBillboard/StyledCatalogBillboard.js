import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'

export const CatalogBillboardWrapper = styled.div`
  position: relative;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-width: 15vw;
  height: 100px;

  text-align: center;
  word-wrap: break-word;

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 10px;
  margin: auto 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .5);
  }

  @media (min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
    width: 100%;
    height: 150px;

    margin-top: 50px;
  }

  @media(min-width: ${forDesktop.minWidth}px){
    min-width: 234px;
    height: 170px;
  }
`

export const CatalogBillboardTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 23px;

  margin-top: 10px;
  margin-bottom: 10px;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media(min-width: ${forDesktop.minWidth}px){
    margin-bottom: 20px;
  }
`

export const CatalogBillboardLink = styled(Link)`
  display: inline-block;
  color: #fff;
  font-size: 12px;
  text-decoration: underline;
  text-align: center;

  margin-top: 0;

  :hover {
    color: #fff;
    text-decoration: underline;
  }

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 14px;
  }

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 18px;
    text-decoration: none;
  }
`

export default CatalogBillboardWrapper