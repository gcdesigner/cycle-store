import React from 'react';

import { Container, Image, Title, Subtitle, Details, Price, PriceTotal, Descount } from './styles';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Product({ thumbnail, title, subtitle, price, totalPrice, descount, onPress }) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={onPress}>
        <>
          <Image source={{ uri: thumbnail }} />
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Details>
            <Price>$ {price}</Price>
            <PriceTotal>$ {totalPrice}</PriceTotal>
            <Descount>{descount}% off</Descount>
          </Details>
        </>
      </TouchableWithoutFeedback>
    </Container>
  );
}
