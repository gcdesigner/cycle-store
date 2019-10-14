import React from 'react';

import { Container, Image, Title, Subtitle, Details, Price, PriceTotal, Descount } from './styles';

export default function Product({ thumbnail, title, subtitle, price, totalPrice, descount }) {
  return (
    <Container>
      <Image source={{ uri: thumbnail }} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Details>
          <Price>$ {price}</Price>
          <PriceTotal>$ {totalPrice}</PriceTotal>
          <Descount>{descount}% off</Descount>
        </Details>
    </Container>
  );
}
