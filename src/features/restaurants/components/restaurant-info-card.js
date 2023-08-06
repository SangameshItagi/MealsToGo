import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import { styled } from "styled-components";

const Title = styled.Text`
    padding:16px;
    color:red;
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
            <Card elevation={5} style={styles.card}> 
                <Card.Cover  key={name} style = {styles.cover} source={{ uri: photo[0] }} />
                <Title>{name}</Title>
            </Card> 
    )
};

const styles = StyleSheet.create(
    {
        card:{backgroundColor:"white"},
        cover:{padding:20, backgroundColor:"white"},
        title :{padding:16}
    }
)