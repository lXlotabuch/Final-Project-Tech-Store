import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import close from '../../../images/header/Close.svg'
import { openSlideShadule as openSlide} from '../Utils/Animations'

// styled
import {
  PopUpBlock, FieldTimeOutlinedStyled, TimeContainer, CloseShedule,
  PositionTimeIcon, SmoothLine, ListsTime, AdressContainer, PositionAdressIcon,
  EnvironmentOutlinedStyled, ContactsContainer, BlackEP
} from './PopUpShedulteContainerStyled';

const PopUpShedulteContainer = ({isOpenSheduleMenu, setisOpenSheduleMenu}) => {
  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.closest('#arrowDownShedule') !== null) {
        setisOpenSheduleMenu(() => true);
        return
      }
      if (isOpenSheduleMenu) {
        if (e.target.closest('#popUpShedule') === null) {
          setisOpenSheduleMenu(() => false)
        }
      }
    })
  }, [isOpenSheduleMenu, setisOpenSheduleMenu])
    
  return (
    <PopUpBlock
      id="popUpShedule"
      variants={openSlide}
      initial={false}
      animate={isOpenSheduleMenu ? 'show' : 'hidden'}
    >
      <TimeContainer>
        <CloseShedule onClick={() => setisOpenSheduleMenu((prev) => !prev)}>
          <img src={close} alt="close" />
        </CloseShedule>
        <PositionTimeIcon>
          <FieldTimeOutlinedStyled />
        </PositionTimeIcon>

        <ListsTime>
          <li>
            <h5>
              <small>We are open:</small>
            </h5>
          </li>
          <li>
            <h5>
              <span>Mon-Thu:</span>
              9:00 AM - 5:30 PM
            </h5>
          </li>
          <li>
            <h5>
              <span>Fr:</span>
              9:00 AM - 6:00 PM
            </h5>
          </li>
          <li>
            <h5>
              <span>Sat:</span>
              11:00 AM - 5:00 PM
            </h5>
          </li>
        </ListsTime>

      </TimeContainer>

      <SmoothLine />

      <AdressContainer>
        <PositionAdressIcon>
          <EnvironmentOutlinedStyled />
        </PositionAdressIcon>
        <ul>
          <li>Address: 1234 Street Adress,</li>
          <li>City Address, 1234</li>
        </ul>
      </AdressContainer>

      <SmoothLine />

      <ContactsContainer>
        <BlackEP>
          <h6>
            Phones:
            {' '}
            <a href="tel: +(00) 1234 5678">(00) 1234 5678</a>
          </h6>
          <h6>
            E-mail:
            {' '}
            <a href="mailto: shop@email.com">shop@email.com</a>
          </h6>
        </BlackEP>
      </ContactsContainer>

    </PopUpBlock>
  );
}

PopUpShedulteContainer.propTypes = {
  isOpenSheduleMenu: PropTypes.bool.isRequired,
  setisOpenSheduleMenu: PropTypes.func.isRequired,
}

export default PopUpShedulteContainer;
