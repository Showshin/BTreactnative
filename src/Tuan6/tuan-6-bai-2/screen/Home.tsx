import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import blue_bike from '../assets/blue_bike.png';
export default function Home({navigation} : any) {
  return (
    <View style={styles.container}>
      <View style={{ margin: 10, flex: 1, alignItems: 'center' }}>
        <View style={{}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 24,
              fontFamily: 'regular',
              textAlign: 'center',
              marginVertical: 12,
            }}>
            A premium online store for sporter and their stylish choice
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#E941411A',
            justifyContent: 'center',
            borderRadius: 12,
            padding: 20,
            alignItems: 'center',
          }}>
          <Image
            source={blue_bike}
            resizeMode="contain"
            style={{ height: 200, width: 250 }}
          />
        </View>
        <Text style={{ fontWeight: '700', fontSize: 26, textAlign: 'center' }}>
          POWER BIKE SHOP
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: '#E94141',
            borderRadius: 25,
            paddingVertical: 12,
            paddingHorizontal: 50,
            marginTop: 60,
            alignSelf: 'center',
            
          }}
          onPress={() =>navigation.navigate("Shopping")}
          >
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
