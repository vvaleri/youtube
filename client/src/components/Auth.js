import { Main, Container, Logo, Title, Inputs, Form, Label, Login, Password, Enter } from '../styles/auth';

export function Auth() {
  return(
    <Main>
      <Container>
        <Logo><img src="img/logo.svg" alt="логотип"/></Logo>
        <Title>Вход</Title>

        <Form>
          <Inputs>
            <Label>Логин</Label>
            <Login type="text"/>

            <Label>Пароль</Label>
            <Password type="password"></Password>
          </Inputs>
          <Enter>Войти</Enter>

        </Form>
        
      </Container>
    </Main>
    
  )
}