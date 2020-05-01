import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

import logo from '../../images/logo.png';

export default function Header() {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
        <div>
            <Link to="/"><img src={logo} alt="Final Fantasy Remake" /></Link>
        </div>

        <div onClick={handleSignOut}>
            <span></span>
            <span></span>
        </div>
    </Container>
  );
}
