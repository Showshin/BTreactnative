import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
export default function Card({ data }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row', padding: 10, borderTopWidth:3, borderColor:"#e5e5e5" }}>

        <Image style={{ flex: 1 }} source={{ uri: data.image }} />
        <View style={{ flex: 3 }}>
          <Text>{data.productName}</Text>
          <Text>
            {data.price.toLocaleString()} {data.currency}
          </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {[...Array(data.rating)].map((_, i) => {
                return <Entypo name="star" size={13} color="black" key={i} />;
              })}
              <Text>({data.reviewCount} reviews)</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="shopping-basket" size={20} color="red" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: 'red' }}>{data.discountPercent}% Off</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
