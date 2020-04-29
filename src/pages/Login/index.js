import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../images/logo.png';

export default function Login() {
  let navigate = useNavigate();

  const handleFormSubmit = e => {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <Container>
        <img src={logo} alt="Final Fantasy Remake" />

        <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Your e-mail</label>
            <input type="email" name="email" />

            <input type="submit" value="Sign in" />
        </form>
    </Container>
  );
}
