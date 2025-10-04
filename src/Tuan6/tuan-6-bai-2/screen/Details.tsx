import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Details({ route, navigation }: any) {
  const { name, price, image } = route.params; // lấy dữ liệu bike từ navigation
  const discountPrice = (price * 0.85).toFixed(2); // giả sử 15% OFF

  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.bikeImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.bikeName}>{name}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.discountText}>15% OFF | ${discountPrice}</Text>
          <Text style={styles.originalPrice}>${price}</Text>
        </View>

        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>
          It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>

        <View style={styles.actionsRow}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Text style={[styles.likeButton, liked && styles.liked]}>
              ♥
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton} onPress={() => alert('Added to cart!')}>
            <Text style={styles.addButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bikeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#fdeeee',
  },
  infoContainer: {
    padding: 20,
  },
  bikeName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  discountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ff5e5e',
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  descriptionTitle: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 30,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeButton: {
    fontSize: 28,
    color: '#999',
  },
  liked: {
    color: '#ff5e5e',
  },
  addButton: {
    backgroundColor: '#ff5e5e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
