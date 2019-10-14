import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #071f2d;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 100%;
  resizeMode: contain;
  z-index: 0;
  opacity: 0.1;
`;

export const Logo = styled.Image`
  width: 300px;
  height:150px;
  resizeMode: contain;
  margin-bottom: 50px;
`;

export const Form = styled.View`
  padding: 0 30px;
`;

export const InputIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 45px;
  left: 0;
  top: 0;
  z-index: 1;
  padding: 0 5px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 45px;
  border-bottom-width: 1px;
  border-color: #fff;
  padding-left: 35px;
  margin-bottom: 15;
  color: #fff;
  opacity: 0.5;
  font-size: 20px;
`;

export const ForgotText = styled.Text`
  color: #999;
  text-align: right;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const TextSignIn = styled.Text`
  color: #f5f5f5;
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const SignSocialContainer = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconSocial = styled.View`
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50;
  align-items: center;
  justify-content: center;
`;
