import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #f1f1f1;
  padding: 20px 20px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Logo = styled.Image`
  flex: 1;
  height: 40px;
  resizeMode: contain;
  margin-top: 15px;
`;

export const Icon = styled.View`
  margin-left: 5px;
`;

export const Search = styled.View`
  position: relative;
  background: #fff;
  border-radius: 30px;
  elevation: 1;
`;

export const Input = styled.TextInput`
  padding: 8px 10px 8px 45px;
`;

export const NavCategories = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const ButtonCategory = styled.TouchableOpacity`
  flex: 1;
  background: #24abbc;
  padding: 5px 5px;
  border-radius: 30px;
`;

export const CategoryText = styled.Text`
  color: #fff;
  text-align: center;
`;

export const ProductsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
