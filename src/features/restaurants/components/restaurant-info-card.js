import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "react-native-paper";
import { styled } from "styled-components";
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import {SvgXml} from 'react-native-svg';

const Title = styled.Text`
    color:${(props)=>props.theme.colors.text.primary};
    font-family:${(props)=>props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`
    padding:${(props)=>props.theme.space[3]}

`;

const Address = styled.Text`
    font-family:${(props)=>props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};

`;

const RestaurantCard = styled(Card)`
    background-color:${(props)=>props.theme.colors.bg.primary};
`;

const RestaurantCoverCard = styled(Card.Cover)`
    padding:${(props)=>props.theme.space[3]};
    background-color:${(props)=>props.theme.colors.bg.primary};
`;

const Section = styled(View)`
    flex-direction:row;
    align-items:center;
`;

const Rating = styled(View)`
    flex-direction:row;
    padding-top:${(props)=>props.theme.space[2]};
`;

const SectionEnd = styled(View)`
    flex:1;
    flex-direction:row;
    justify-content: flex-end;
`;


 
export const RestaurantInfoCard = ({restaurant={}})=>{
    const {
        name= "Some restaurant",
        icon,
        photos =["https://picsum.photos/701"],
        address="100 Some random st",
        isOpenNow=true,
        rating=4,
        isClosedTemporarily,
    } = restaurant;

    const ratingArray = Array.from(new Array(rating));

    return (
            <RestaurantCard elevation={5}> 
                <RestaurantCoverCard  key={name}  source={{ uri: photos[0] }} />
                <Info>
                    <Title>{name}</Title>
                    <Section >
                        <Rating> 
                            {ratingArray.map(() =>(
                                <SvgXml xml={star} width={20} height={20}/>
                            ))}
                        </Rating>
                        <SectionEnd>
                            <SvgXml xml={open} width={20} height={20}/>
                        </SectionEnd>
                    </Section>
                    <Address>{address}</Address>
                    
                </Info>
            </RestaurantCard> 
    )
};