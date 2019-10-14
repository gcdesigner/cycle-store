import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons'
import api from '../../data-content.json'

import Button from '../../components/Button'

import {
    Container,
    BackgroundColor,
    Header,
    TitleContainer,
    Close,
    Title,
    Subtitle,
    Carousel,
    CarouselImage,
    Pagination,
    PagButton,
    ReviewsContainer,
    InfoReviews,
    ThumbsReviews,
    ImageReview,
    PriceContainer,
    FlexRow,
    DetailsContainer
} from './styles';

export default function Single({ navigation }) {

    const [product, setProduct] = useState([])
    const id = navigation.getParam('id')

    useEffect(() => {
        function getProduct() {
            const response = api.products.filter(prod => prod.id === id)
            setProduct(response)
        }

        getProduct()
    }, [])

    return (
        <>
            <BackgroundColor />
            <Container>
                {product.map(p => (
                    <View key={p.id}>
                        <Header>
                            <TitleContainer>
                                <Title>{p.title}</Title>
                                <Subtitle>{p.subtitle}</Subtitle>
                            </TitleContainer>
                            <Close onPress={() => navigation.navigate('List')} >
                                <AntDesign name="close" size={20} color="#fff" />
                            </Close >
                        </Header>

                        <Carousel>
                            <CarouselImage source={{ uri: p.thumbnail }} />
                            <Pagination>
                                <PagButton active />
                                <PagButton />
                                <PagButton />
                                <PagButton />
                            </Pagination>
                        </Carousel>

                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Reviews @ Ratings</Text>
                        <ReviewsContainer>
                            <InfoReviews>
                                <Text style={{ color: 'green', fontSize: 16 }}>4.5 <AntDesign name="star" size={10} color="green" /></Text>
                                <Text style={{ color: '#333', fontSize: 8 }}>100 Ratings and</Text>
                                <Text style={{ color: '#333', fontSize: 8 }}>10 responses</Text>
                            </InfoReviews>
                            <ThumbsReviews>
                                <ImageReview source={{ uri: "http://blog.bikeregistrada.com.br/wp-content/uploads/2017/03/confira-4-dicas-para-melhorar-sua-performance-no-ciclismo-1000x640.jpeg" }} />
                                <ImageReview source={{ uri: "http://blog.bikeregistrada.com.br/wp-content/uploads/2017/03/confira-4-dicas-para-melhorar-sua-performance-no-ciclismo-1000x640.jpeg" }} />
                                <ImageReview source={{ uri: "http://blog.bikeregistrada.com.br/wp-content/uploads/2017/03/confira-4-dicas-para-melhorar-sua-performance-no-ciclismo-1000x640.jpeg" }} />
                                <ImageReview source={{ uri: "http://blog.bikeregistrada.com.br/wp-content/uploads/2017/03/confira-4-dicas-para-melhorar-sua-performance-no-ciclismo-1000x640.jpeg" }} />
                            </ThumbsReviews>
                        </ReviewsContainer>

                        <PriceContainer>
                            <Text style={{ flex: 1, color: '#666', fontSize: 16 }}>Original Price</Text>
                            <FlexRow>
                                <Text style={{ color: '#666', fontSize: 12, marginRight: 10 }}>{p.totalPrice}</Text>
                                <Text style={{ color: 'green', fontSize: 12, marginRight: 10 }}>{p.decount}% 0ff</Text>
                            </FlexRow>
                            <Text style={{ color: '#222', fontWeight: 'bold', fontSize: 30 }}>${p.price}</Text>
                        </PriceContainer>

                        <DetailsContainer>
                            <Text style={{ flex: 1, color: '#666', fontSize: 16 }}>All details</Text>
                            <AntDesign name="right" size={20} color="#666" />
                        </DetailsContainer>

                        <Button label="Add to cart" onPress={() => { }} />
                    </View>
                ))}
            </Container>
        </>
    );
}
