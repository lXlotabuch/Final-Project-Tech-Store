import React from 'react';
import PropTypes from 'prop-types';
import {
  PopUpContainer, HeaderOfPopUp, Line,
  RightOutlinedStyled, CloseOutlinedStyled,
  Listnavigation, ExceptionLi, TechTag, LinkStyled
} from './PopUpListStyled';
import LogoBurger from '../Utils/LogoDesktop';

const PopUpList = ({
  openSlide, isOpen, openCloseMenu,
  hideList, checkForLinkOpen, setIsOpen,
  hideInput, backToDefaulOpen
}) => (

  <PopUpContainer
    hideInput={hideInput}
    hideList={hideList}
    setIsOpen={setIsOpen}
    isOpen={isOpen}
    variants={openSlide}
    initial={false}
    animate={isOpen ? 'show' : 'hidden'}
  >
    <HeaderOfPopUp>
      <TechTag>
        <LinkStyled
          to="/"
          onClick={backToDefaulOpen}
        >
          Tech Store
        </LinkStyled>
      </TechTag>
      <LinkStyled to="/" style={{outline: 'none'}}>
        <LogoBurger backToDefaulOpen={backToDefaulOpen} />
      </LinkStyled>
      <CloseOutlinedStyled onClick={() => openCloseMenu()} />
      <Line />
    </HeaderOfPopUp>
    <Listnavigation onClick={(e) => checkForLinkOpen(e)}>
      <LinkStyled
        to="/catalog?categories=desctops"
      >
        <ExceptionLi>
          <h5>Desktops</h5>
          <RightOutlinedStyled />
        </ExceptionLi>
      </LinkStyled>
      <LinkStyled
        to="/catalog?categories=gamingMonitors"
      >
        <li>
          <h5>Gaming Monitors</h5>
          <RightOutlinedStyled />
        </li>
      </LinkStyled>
      <LinkStyled
        to="/catalog?categories=laptops"
      >
        <li>
          <h5>Laptops</h5>
          <RightOutlinedStyled />
        </li>
      </LinkStyled>
      <LinkStyled
        to="/catalog?categories=tablets"
      >
        <li>
          <h5>
            Tablets
          </h5>
          <RightOutlinedStyled />
        </li>
      </LinkStyled>
      <LinkStyled
        to="/catalog"
      >
        <li>
          <h5>Catalog</h5>
          <RightOutlinedStyled />
        </li>
      </LinkStyled>
    </Listnavigation>
  </PopUpContainer>
)
PopUpList.propTypes = {
  hideList: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openCloseMenu: PropTypes.func.isRequired,
  checkForLinkOpen: PropTypes.func.isRequired,
  openSlide: PropTypes.instanceOf(Object).isRequired,
  hideInput: PropTypes.bool.isRequired,
  backToDefaulOpen: PropTypes.func.isRequired
}
export default PopUpList;
