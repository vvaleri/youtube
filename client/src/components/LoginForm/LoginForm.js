import { Main, Container, Logo, Title, Inputs, Form, Label, TipBtn, Tip } from './loginFormStyles';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import Icon from '../../img/logo.svg';
import IconQuestion from '../../img/icon-question.svg';
import { ErrorTooltip } from '../UI/ErrorTooltip/ErrorTooltip';

export const LoginForm = ({ inputValue,
  email,
  password,
  setInputValue,
  textButton,
  formAction,
  textError,
  isError,
  tipPassword,
  showTipPassword,
  isTip,
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
            <Label>
              Пароль
              {isTip
              && (
              <>
                {tipPassword && <Tip>Пароль должен содержать от 3 до 12 символов</Tip>}
                <TipBtn type="button" onClick={showTipPassword}>
                  <img src={IconQuestion} alt="tip for password" />
                </TipBtn>
              </>
              )}
            </Label>
            <Input
              value={password}
              onChange={e => setInputValue({ ...inputValue, password: e.target.value })}
              type="password"
              required
            />
          </Inputs>
          {isError && <ErrorTooltip login>{textError}</ErrorTooltip>}
          <Button register type="submit">{textButton}</Button>
        </Form>
        {children}
      </Container>
    </Main>
);
