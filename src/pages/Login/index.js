import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import Button from '../../components/Button'

import { Container, Background, Logo, Form, InputIcon, Icon, Input, ForgotText, SignSocialContainer, TextSignIn, IconSocial } from './styles';
import background from '../../assets/bike-photos.jpg'
import logo from '../../assets/logo.png'

export default function Login({ navigation }) {

  function goToList(){
    navigation.navigate('List')
    console.log('oi')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Background source={background} />
        <Logo source={logo} />
        <Form>
          <InputIcon>
            <Icon>
              <AntDesign name="user" size={20} color="#999" />
            </Icon>
            <Input type="text" placeholder="User name" />
          </InputIcon>
          <InputIcon>
            <Icon>
              <AntDesign name="lock" size={20} color="#999" />
            </Icon>
            <Input type="password" placeholder="Password" />
          </InputIcon>

          <ForgotText>Forgot password?</ForgotText>
          <Button 
            type="primary" 
            label="Get Started" 
            onPress={goToList}
          />
        </Form>

        <TextSignIn>Sign in with</TextSignIn>
        <SignSocialContainer>
          <IconSocial>
            <AntDesign name="googleplus" size={25} color="#fff" />
          </IconSocial>
          <IconSocial>
            <FontAwesome name="facebook-f" size={25} color="#fff" />
          </IconSocial>
          <IconSocial>
            <AntDesign name="twitter" size={25} color="#fff" />
          </IconSocial>
        </SignSocialContainer>
      </Container>
    </SafeAreaView>
  );
}
