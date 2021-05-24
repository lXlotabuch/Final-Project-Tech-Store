import { React } from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyled, List } from './ToSignUpStyled';

const ToSignUp = () => (
  <div>
    <List>
      <li>Check out faster</li>
      <li>Keep more than one address</li>
      <li>Track orders and more</li>
    </List>
    <Link to="/signup">
      <ButtonStyled type="primary" shape="round">
        Create An Account
      </ButtonStyled>
    </Link>
  </div>
)

export default ToSignUp