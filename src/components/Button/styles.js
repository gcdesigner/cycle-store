import styled from 'styled-components';
import colors from '../../style/colors'

export const MyButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 30;
  padding: 15px 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
`;
