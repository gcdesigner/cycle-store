import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList } from 'react-native'
import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';

import { Container, Header, Logo, Search, Input, NavCategories, ButtonCategory, CategoryText, ProductsContainer } from './styles';

import data from '../../data-content.json'
import logo from '../../assets/logo-cycle-store.png'
import Product from '../../components/Product'

export default function List({ navigation }) {
  const [products, setProducts] = useState([])
  const [activeButton, setActiveButton] = useState('first')

  useEffect(() => {
    function getProducts() {
      const response = JSON.parse(JSON.stringify(data))
      setProducts(response.products)
    }
    getProducts()
  }, [])

  function goToProduct(id) {
    navigation.navigate('Single', { id })
  }

  return (
    <Container>
      <Header>
        <AntDesign name="menu-fold" size={25} color="#666" />
        <Logo source={logo} />
        <Feather name="bell" size={20} color="#666" style={{ marginRight: 15 }} />
        <SimpleLineIcons name="bag" size={20} color="#666" />
      </Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

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
              onPress={() => goToProduct(item.id)}
            />
          }
          keyExtractor={item => item.id}
        />
        {/* <ProductsContainer> */}
      </ScrollView>

    </Container>
  );
}
