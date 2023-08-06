import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

export const RestaurantsScreen=()=>(
    <SafeAreaView style={{flex:1}}>
      <View>
      <Searchbar 
        placeholder="Search"
      />
      </View>

      <View style={styles.FileList}>
      <RestaurantInfoCard/>
      </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
  
    search:{
      flexDirection:1,
      padding:16,
      backgroundColor: 'green',
    },
    FileList:{
      flex:1,
      padding:16,
      backgroundColor: 'blue',
    }
  });
