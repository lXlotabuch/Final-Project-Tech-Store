import { Select } from 'antd'
import styled from 'styled-components'
import { forDesktop, forMobile, forTablet } from '../../../styles/mediaBreakPoints'

export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
font-size: 10px;
margin-bottom: 30px;
@media (min-width: 591px){
  & {
    justify-content: flex-end;
  }
}
`

export const SelectWrapper = styled.div`
display: flex;
align-items: center;
border: 2px solid rgba(204,204,204,1);
padding: 0 10px;
border-radius: 2px;
font-weight: 600;

@media (max-width: ${forMobile.maxWidth}px){
  width: auto;
}

& .title-select {
  @media (max-width: ${forMobile.maxWidth}px){
    display: none;
  }
  color: rgba(204,204,204,1);
};

@media (max-width: ${forTablet.maxWidth}px){
  &:last-child{
    display: none;
  }
}

@media (min-width: ${forTablet.minWidth}px){
  width: 183px;
}

@media (min-width: ${forDesktop.minWidth}px){
  width: 200px;
  font-size: 13px;
  margin-left: 11px;
}

`

export const FilterBtn = styled.button`
    display: block;
    font-size: 10px;
    font-family: inherit;
    font-weight: 600;
    padding: 8px 30px;
    height: 100%;
    border: 2px solid #CCCCCC;
    border-radius: 2px;
    background-color:#FFFFFF;
    color: black;
    width: 130px;
  @media (min-width: ${forTablet.minWidth}px){
    font-size: 14px;
    min-width: 150px;
    padding: 6px 30px;
  }
  @media(min-width: 591px) {
    display: none;
  }
`;

export const StyledSelect = styled(Select)`
    font-size: 10px;  
  @media (min-width: ${forTablet.minWidth}px){
    width: 120px;
    font-size: 14px;
  }
`
