import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Shopping({navigation} : any) {
  const [category, setCategory] = useState("all");
  const bikeData = {
  mountain: [
    { name: 'Mountain Bike 1', price: 1800, image: require('../assets/mountain_1.png') },
    { name: 'Mountain Bike 2', price: 1700, image: require('../assets/mountain_2.png') },
    { name: 'Mountain Bike 3', price: 1900, image: require('../assets/mountain_3.png') },
  ],
  road: [
    { name: 'Road Bike 1', price: 2200, image: require('../assets/roadbike_1.png') },
    { name: 'Road Bike 2', price: 2500, image: require('../assets/roadbike_2.png') },
    { name: 'Road Bike 3', price: 2700, image: require('../assets/roadbike_3.png') },
  ],
};

  const bikesToShow =
    category === 'all'
      ? [...bikeData.mountain, ...bikeData.road]
      : bikeData[category] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>The world’s Best Bike</Text>

      {/* Thanh chọn category */}
      <View style={styles.filterContainer}>
        {['all', 'mountain', 'road'].map((i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setCategory(i)}
            style={{borderWidth:1, padding:10, borderColor:"gray", borderRadius:10}}
          >
            <Text
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.productList}>
        {bikesToShow.map((bike : any) => (
          <TouchableOpacity key={bike} style={styles.productCard} onPress={() => navigation.navigate("Details", bike)}>
            <Image source={bike.image} style={styles.productImage} />
            <Text style={styles.productName}>{bike.name}</Text>
            <Text style={styles.productPrice}>${bike.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 10
  },
  productCard: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '45%',
    alignItems: 'center',
    shadowRadius: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#ff5e5e',
    fontWeight: 'bold',
  },
});
