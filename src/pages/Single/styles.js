import styled from 'styled-components';
import colors from '../../style/colors'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  padding: ${Platform.OS === 'android' ? '35px 20px 0' : '0 20px'};
`;

export const BackgroundColor = styled.View`
  position: absolute;
  width: 100%;
  height: 250px;
  background: ${colors.primary};
  z-index: 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleContainer = styled.View`
  flex: 1;
`;


export const Close = styled.TouchableOpacity`

`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0;
  elevation: 1;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Carousel = styled.View`
  width: 100%;
`;

export const CarouselImage = styled.Image`
  height: 250px;
  resizeMode: contain;
`;

export const Pagination = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto 15px;
`;

export const PagButton = styled.TouchableOpacity`
  width: 15px;
  height: 15px;
  color: #000;
  border-radius: 50px;
  background-color: ${props => props.active ? colors.primary : '#d1d1d1'};
`;

export const ReviewsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
`;

export const InfoReviews = styled.View`
  margin-right: 10px;
`;

export const ThumbsReviews = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageReview = styled.Image`
  width: 22%;
  height: 50px;
  resizeMode: cover;
  border-radius: 5px;
  background: red;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #ddd;
  padding: 20px 0;
`;

export const FlexRow = styled.View`
  flex-direction: row;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;
