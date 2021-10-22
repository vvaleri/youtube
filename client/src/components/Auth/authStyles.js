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
  margin-bottom: 40px;

  input {
    margin-bottom: 20px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: rgba(23, 23, 25, 0.3);
`

export { Main, Container, Logo, Title, Inputs, Label, Form }