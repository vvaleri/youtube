import { useState } from 'react';
import { Main, Container, Logo, Title, Inputs, Form, Label, Login, Password, Enter } from './authStyles';
import axios from 'axios';

export function Auth() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const initRegistation = () => {

    const userData = {
      email,
      password
    }

    axios.post('http://localhost:5000/auth/registration', userData)
    .then(res => console.log(res.data))
  }

  return(
    <Main>
      <Container>
        <Logo><img src="img/logo.svg" alt="логотип"/></Logo>
        <Title>Вход</Title>

        <Form>
          <Inputs>
            <Label>E-mail</Label>
            <Login value={ email } onChange={ e => setEmail(e.target.value) } type="text"/>

            <Label>Пароль</Label>
            <Password value={ password } onChange={ e => setPassword(e.target.value) } type="password"></Password>
          </Inputs>
          <Enter onClick={ initRegistation }>Зарегистрироваться</Enter>

        </Form>
        
      </Container>
    </Main>
    
  )
}