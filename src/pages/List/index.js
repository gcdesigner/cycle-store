import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList } from 'react-native'
import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';

import { Container, Header, Logo, Search, Input, NavCategories, ButtonCategory, CategoryText, ProductsContainer } from './styles';

import data from '../../data-content.json'
import logo from '../../assets/logo.png'
import Product from '../../components/Product'

export default function List() {
  const [products, setProducts] = useState([])
  const [activeButton, setActiveButton] = useState('first')

  useEffect(() => {
    function getProducts() {
      const response = JSON.parse(JSON.stringify(data))
      setProducts(response.products)
    }
    getProducts()
  }, [])

  return (
    <Container>
      <Header>
        <AntDesign name="menu-fold" size={25} color="#222" />
        <Logo source={logo} />
        <Feather name="bell" size={25} color="#666" style={{ marginRight: 10 }} />
        <SimpleLineIcons name="bag" size={25} color="#666" />
      </Header>

      <Search>
        <AntDesign
          name="search1"
          size={20}
          color="#aaa"
          style={{
            position: 'absolute',
            zIndex: 5,
            top: 10,
            left: 15
          }} />
        <Input
          type="text"
          placeholder="Search brand, product"
        />
      </Search>

      <NavCategories>
        <ButtonCategory
          onPress={() => setActiveButton('first')}
          isActive={activeButton === 'first'}
        >
          <CategoryText>Mens</CategoryText>
        </ButtonCategory>

        <ButtonCategory style={{ marginHorizontal: 10 }}
          onPress={() => setActiveButton('second')}
          isActive={activeButton === 'second'}
        >
          <CategoryText>Ladies</CategoryText>
        </ButtonCategory>

        <ButtonCategory
          onPress={() => setActiveButton('third')}
          isActive={activeButton === 'third'}
        >
          <CategoryText>Kids</CategoryText>
        </ButtonCategory>

      </NavCategories>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
          <FlatList
            data={products}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <Product
                thumbnail={item.thumbnail}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                totalPrice={item.totalPrice}
                descount={item.descount}
              />
            }
            keyExtractor={item => item.id}
          />
        {/* <ProductsContainer> */}
      </ScrollView>

    </Container>
  );
}
