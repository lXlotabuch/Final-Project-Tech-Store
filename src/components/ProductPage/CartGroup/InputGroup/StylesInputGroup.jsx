import styled from 'styled-components'

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 48px;
    margin-right: 14px;
    border-radius: 6px;
    background-color: #EBEBEB;
`
export const StyledInput = styled.input`
    width: 30px;
    margin-left: 10px;
    border: none;
    background-color: #EBEBEB;
    
    &::selection {
        color: inherit;
        background-color: #EBEBEB;
    }
`
export const ArrowsBox = styled.div`
    display: flex;
    flex-direction: column;
    #topArrow {
        margin-bottom: 5px;
    }
`
export const ArrowBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    cursor: pointer;
    &:hover {
    border: 1px solid rgba(0, 0, 0, 1);
    }
`