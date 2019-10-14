import styled from 'styled-components';
import colors from '../../style/colors'

export const Container = styled.View`
  width: 48%;
  background: #fff;
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  align-self: center;
  elevation: 1;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;
  resizeMode: contain;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`;

export const PriceTotal = styled.Text`
  font-size: 10px;
  color: #666;
  margin-right: 5px;
`;

export const Descount = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${colors.primary};
`;