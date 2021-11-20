import { Main, Container, Logo, Title, Inputs, Form, Label } from './loginFormStyles';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import Icon from '../../img/logo.svg';

export const LoginForm = ({ inputValue,
  email,
  password,
  setInputValue,
  textButton,
  formAction,
  children }) => (
    <Main>
      <Container>
        <Logo><img src={Icon} alt="логотип" /></Logo>
        <Title>Вход</Title>
        <Form onSubmit={formAction}>
          <Inputs>
            <Label>E-mail</Label>
            <Input
              value={email}
              onChange={e => setInputValue({ ...inputValue, email: e.target.value })}
              type="text"
              required
            />
            <Label>Пароль</Label>
            <Input
              value={password}
              onChange={e => setInputValue({ ...inputValue, password: e.target.value })}
              type="password"
              required
            />
          </Inputs>
          <Button register type="submit">{textButton}</Button>
        </Form>
        {children}
      </Container>
    </Main>
);
