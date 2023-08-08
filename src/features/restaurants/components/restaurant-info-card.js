import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import { styled } from "styled-components";

const Title = styled.Text`
    padding:16px;
    color:${(props)=>props.theme.colors.text.primary};
    font-family:${(props)=>props.theme.fonts.body}
`;

const RestaurantCard = styled(Card)`
    background-color:${(props)=>props.theme.colors.bg.primary};
`;

const RestaurantCoverCard = styled(Card.Cover)`
    padding:${(props)=>props.theme.space[3]};
    background-color:${(props)=>props.theme.colors.bg.primary};
`;

export const RestaurantInfoCard = ({restaurant={}})=>{
    const {
        name= "Some restaurant",
        icon,
        photo =["https://picsum.photos/700"],
        address="Some random st",
        isOpenNow=true,
        rating=4,
        isClosedTemporarily,
    } = restaurant
    return (
            <RestaurantCard elevation={5}> 
                <RestaurantCoverCard  key={name}  source={{ uri: photo[0] }} />
                <Title>{name}</Title>
            </RestaurantCard> 
    )
};