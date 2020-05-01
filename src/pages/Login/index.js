import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

import { Container } from './styles';

import logo from '../../images/logo.png';

export default function Login() {
  let navigate = useNavigate();
  const { signed, signIn } = useContext(AuthContext);
  
  console.log(signed);

  function handleFormSubmit (e) {
    e.preventDefault();
    
    // const response = await signIn();
    // console.log(response);

    // navigate('/home');

    signIn();
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
