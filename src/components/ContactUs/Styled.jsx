import styled from 'styled-components'
import { Form, Input, } from 'antd';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const StyledWrapperContainer = styled.div`
    margin: 28px 0;
`

export const StyledWrapper = styled.div`
    grid-area: text;
`

export const StyledTitle = styled.h2`
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 10px;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
    margin: 15px 0;
}

@media(min-width: ${forDesktop.minWidth}px){
    font-size: 32px;
    margin: 20px 0;
}
`

export const StyledText = styled.p`
    font-weight: 300;
    font-size: 13px;    
    padding: 6px 0;

@media(min-width: ${forDesktop.minWidth}px){
    font-size: 16px;
    padding: 4px 0;
}
`

export const StyledContainer = styled.div`
    display: grid;
    grid-template-areas: 
        'text'
        'form'
        'adress';

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        'text text'
        'form adress'
        'form adress';
}

@media(min-width: ${forDesktop.minWidth}px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
        'text text adress'
        'form form adress'
        'form form adress';
}
`

export const StyledForm = styled(Form)`
    padding-top: 15px;
    grid-area: form;

    & .ant-form-item {
        margin-bottom: 15px !important;
        
        & .ant-form-item-label {
        padding: 0 !important;
        }
    }

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
    padding-right: 26px;
}
`

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const StyledFormItem = styled(Form.Item)`
    width: 100%;

@media(min-width: ${forDesktop.minWidth}px){
    width: 50%;
}
`

export const StyledFormItemTextArea = styled(Form.Item)`
    width: 100%;
`

export const StyledInput = styled(Input)`
    width: 100%;
    font-size: 11px;
    
    &::placeholder {
        color: #8C8C8C;
    } 

@media(min-width: ${forDesktop.minWidth}px){
    font-size: 14px;
}
`

export const StyledInputTextArea = styled(Input.TextArea)`
    width: 100%;
    min-height: 145px!important;
    font-size: 11px;
    
    &:placeholder {
        color: #8C8C8C;
    }

@media(min-width: ${forDesktop.minWidth}px){
    width: 100%;
    height: 236px;
    font-size: 14px;
}
`

export const StyledContact = styled.div`
    background-color: #F5F9FF;
    padding: 30px 35px;
    grid-area: adress;
`

export const StyledAddress = styled.div`
    display: flex;
`

export const StyledAddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
`

export const StyledIconWrapper = styled.div`
    font-size: 15px;
    padding: 10px 18px 0 0;

@media(min-width: ${forDesktop.minWidth}px){
    font-size: 20px;
    padding-right: 10px 18px 0 0;
}
`

export const StyledHeaderAddress = styled.h4`
    font-weight: 600;
    font-size: 18px;
`

export const StyledTextAddress = styled.p`
    font-size: 13px;
    padding-top: 10px;
`

export const StyledLinkPhoneAddress = styled.a`
    font-size: 13px;
    color: #0156FF;
    padding-top: 10px;
`

export const StyledLinkMailAddress = styled.a`
    font-size: 13px;
    color: #0156FF;
    padding: 10px 0 10px 0;
`