import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { styled } from "styled-components";
import { StatusBar } from "expo-status-bar";

const SafeArea =styled(SafeAreaView)`
  flex:1;
  margin-top:${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding:${(props)=>props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex:1;
  padding:${(props)=>props.theme.space[3]};
`;
export const RestaurantsScreen=()=>(
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search"/>
      </SearchContainer>

      <RestaurantListContainer >
        <RestaurantInfoCard/>
      </RestaurantListContainer>
    </SafeArea>
);
