import styled from "styled-components";

export const LoginPage = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 0px 180px;
  @media (max-width: 700px) {
    align-items: flex-start;
    padding-top: 60px;
    background-color: white;
  }
`;
export const LoginImgContainer = styled.div`
  height: 600px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const LoginImg = styled.img`
  height: 100%;
`;
export const LoginContainer = styled.div`
  border: 1px solid #e6e6e6;
  height: 225px;
  border-radius: 3px;
  background-color: white;
`;
export const Instagram = styled.h1`
  font-family: "Grand Hotel", cursive;
  text-align: center;
  font-size: 4.5rem;
  color: #343434;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;
export const LoginInput = styled.input`
  padding: 10px;
  width: 300px;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
`;
export const LoginButton = styled.button`
  width: 300px;
  color: white;
  background-color: #3897f0;
  margin: auto;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 1.5rem;
  :active {
    transform: scale(0.99);
  }
`;
