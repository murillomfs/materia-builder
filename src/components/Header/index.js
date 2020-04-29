import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../images/logo.png';

export default function Header() {
  return (
    <Container>
        <div>
            <Link to="/"><img src={logo} alt="Final Fantasy Remake" /></Link>
        </div>

        <div>
            <span></span>
            <span></span>
        </div>
    </Container>
  );
}
