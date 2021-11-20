import styled from 'styled-components/macro';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
    align-items: flex-start;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 80px;
  background-color: #fff;

  @media (max-width: 767px) {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    justify-content: center;
  }

  p {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 18px;
  }

  a {
    font-weight: 700;
    color: #0057fa;
    transition: color 0.3s;

    @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      color: #1390E5;
    }
   }
  }
`;

const Logo = styled.div`
  margin-bottom: 30px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }

  img {
    width: 88px;
    height: 88px;

    @media (max-width: 767px) {
      width: 60px;
      height: 60px;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;

const Inputs = styled.div`
  max-width: 334px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

const Label = styled.label`
  color: rgba(23, 23, 25, 0.3);
`;

export { Main, Container, Logo, Title, Inputs, Label, Form };
