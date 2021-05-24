import React from 'react';
import styled from 'styled-components'

const LogoMobile = () => (
  <StyledLogo width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.74742 0.286133L0.690186 6.17961L0.690186 13.4331L9.74742 19.3266L17.0131 14.7932V16.9465L9.74742 21.7067L0.690186 15.6998L0.690186 18.3066L9.74742 24.0867L18.8047 18.3066V11.0531L11.539 15.6998V13.4331L18.8047 8.67301V6.17961L9.74742 0.286133Z" fill="white" />
  </StyledLogo>
)
const StyledLogo = styled.svg`
  position: absolute; 
  top: 50%; 
  left: 50%; 
  width: 25px;
  height: 30px;
  transform: Translate(-50%, -55%);
`;
export default LogoMobile;