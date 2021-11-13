import { Main, Container, Logo, Title, Inputs, Form, Label } from './loginFormStyles';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import Icon from '../../img/logo.svg';

export const LoginForm = ({ inputValue,
  email,
  password,
  setInputValue,
  textButton,
  buttonAction,
  children }) => (
    <Main>
      <Container>
        <Logo><img src={Icon} alt="логотип" /></Logo>
        <Title>Вход</Title>
        <Form>
          <Inputs>
            <Label>E-mail</Label>
            <Input
              value={email}
              onChange={e => setInputValue({ ...inputValue, email: e.target.value })}
              type="text"
            />
            <Label>Пароль</Label>
            <Input
              value={password}
              onChange={e => setInputValue({ ...inputValue, password: e.target.value })}
              type="password"
            />
          </Inputs>
          <Button register onClick={buttonAction}>{textButton}</Button>
        </Form>
        {children}
      </Container>
    </Main>
);
