import styled from 'styled-components/macro';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 80px 60px;
  background-color: #fff;
`

const Logo = styled.div`
  margin-bottom: 30px;

  img {
    width: 88px;
    height: 88px;
  }
`

const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`

const Inputs = styled.div`
  max-width: 334px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: rgba(23, 23, 25, 0.3);
`

const Login = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 15px;
  border: 1px solid rgba(23, 23, 25, 0.2);
  border-radius: 5px;

  :focus {
    outline: none;
    border: 1px solid #1390E5;
    background-color: rgba(197, 228, 249, 0.3);
  }
`

const Password = styled(Login)`
  margin-bottom: 40px;
`

export { Main, Container, Logo, Title, Inputs, Label, Form, Login, Password }