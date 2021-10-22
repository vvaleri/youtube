import { useState } from 'react';
import { Main, Container, Logo, Title, Inputs, Form, Label } from './authStyles';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
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
            <Input value={ email } onChange={ e => setEmail(e.target.value) } type="text"/>
            <Label>Пароль</Label>
            <Input value={ password } onChange={ e => setPassword(e.target.value) } type="password"></Input>
          </Inputs>
          <Button register onClick={ initRegistation }>Зарегистрироваться</Button>

        </Form>
        
      </Container>
    </Main>
    
  )
}