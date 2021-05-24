import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {
  DownOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import FaceBook from '../../images/header/FaceBook.png';
import Inst from '../../images/header/Inst.png';
import PopUpList from './PopUpList/PopUpList';
import PopUpShedulteContainer from './PopUpShadule/PopUpShedulteContainer';
import UserPopUp from './UserPopUp/UserPopUp';
import LogoMobile from './Utils/LogoMobile';
import LogoDesktop from './Utils/LogoDesktop'
import WishListComponent from './WishListComponent/WishListComponent'
import { openSlide } from './Utils/Animations'

// styled
import {
  HeaderContainer, ContainerAlign, ContactUsCall, CallBackAsk,
  SearchAndItemsBlock,
  RelativePosUserPopUp, CircleDesktop, ShaduleContainer,
  ShaduleArrowContainer,
  UserOutlinedStyled, SearchOutlinedStyledMedia,
  CircleMobile, MenuOutlinedStyled,
  CloseOutlinedFormStyled, TechTag, StrechedContainer
} from './HeaderStyled';
import SearchProducts from './SearchProducts/SearchProducts';
import CartIcon from './CartIcon/CartIcon'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSheduleMenu, setisOpenSheduleMenu] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [hideInput, setHideInput] = useState(true);
  const [hideList, setHideList] = useState(false);
  
  const checkForLinkOpen = (e) => {
    if (e.target.closest('li')) {
      setIsOpen(() => false)
    }
  }
  const openCloseMenu = () => {
    setIsOpen((prev) => (!prev))
  }
  const backToDefaulOpen = () => {
    setIsOpen((prev) => (!prev))
    window.scrollTo(0, 0,)
  }
  const toggleShow = () => {
    setHideInput((prev) => !prev);
    setHideList((prev) => !prev);
  }

  return (
    <HeaderContainer>
      <ShaduleContainer>
        <ContainerAlign>
          <Link to="/" style={{outline: 'none'}}>
            <CircleMobile>
              <LogoMobile />
            </CircleMobile>
          </Link>
          <ShaduleArrowContainer>
            <p id="arrowDownShedule">
              Mon - Thu:
              <span> 9.30 AM - 5.30 PM</span>
            </p>
            <div data-testid="arrowDownShedule">
              <DownOutlined style={{color: 'white', cursor: 'pointer'}} id="arrowDownShedule" />
            </div>
          </ShaduleArrowContainer>
          <ContactUsCall>
            <p>
              Visit our showroom in 1234 Street Adress City Address, 1234
            </p>
            <Link to="/contactus" style={{outline: 'none'}}>
              <h3>
                Contact Us
              </h3>
            </Link>
          </ContactUsCall>
          <CallBackAsk>
            <h5>
              <a href="tel: +(00) 1234 5678" style={{ color: 'white', outline: 'none' }}>
                Call Us: (00) 1234 5678
              </a>
            </h5>
            <div>
              <a href="https://www.facebook.com/" target="blank">
                <img src={FaceBook} alt="FaceBook" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="blank">
                <img src={Inst} alt="Inst" />
              </a>
            </div>
          </CallBackAsk>
          <PopUpShedulteContainer
            setisOpenSheduleMenu={setisOpenSheduleMenu}
            isOpenSheduleMenu={isOpenSheduleMenu}
          />
        </ContainerAlign>
      </ShaduleContainer>

      <StrechedContainer>
        <SearchAndItemsBlock>
          <MenuOutlinedStyled onClick={openCloseMenu} data-testid="burger" />
          <Link to="/" style={{outline: 'none', paddingRight: '20px'}}>
            <CircleDesktop>
              <LogoDesktop />
              <TechTag>Tech Store</TechTag>
            </CircleDesktop>
          </Link>
          <PopUpList
            checkForLinkOpen={checkForLinkOpen}
            hideList={hideList}
            setIsOpen={setIsOpen}
            openSlide={openSlide}
            isOpen={isOpen}
            openCloseMenu={openCloseMenu}
            hideInput={hideInput}
            backToDefaulOpen={backToDefaulOpen}
          />
        
          <SearchProducts hideInput={hideInput} setHideInput={toggleShow} />

          {hideInput
            ? (<SearchOutlinedStyledMedia onClick={toggleShow} />)
            : (<CloseOutlinedFormStyled onClick={toggleShow} />)}
          
          <WishListComponent />

          <CartIcon />
          <RelativePosUserPopUp>
            <UserOutlinedStyled
              id="userBtn"
              data-testid="userBtn"
              onClick={() => setIsOpenUser(true)}
            />
            <UserPopUp
              isOpenUser={isOpenUser}
              setIsOpenUser={setIsOpenUser}
            />
          </RelativePosUserPopUp>
        </SearchAndItemsBlock>
      </StrechedContainer>
    </HeaderContainer>
  );
};

export default Header;
