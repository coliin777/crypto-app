import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={styles.containterItem}>
      <View style={styles.coinNames}>
        <Image style={styles.image} source={{ uri: coin.image }} />
        <Text style={styles.text}>{coin.name}</Text>
      </View>
      <Text style={styles.text}>{coin.current_price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containterItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coinNames : {
      flexDirection: 'row',
      
  },
  image: {
    width: 30,
    height: 30
  },
  text: {
    color: "#ffffff",
    paddingTop: 10,
    paddingLeft: 15,
  },
});

export default CoinItem;
