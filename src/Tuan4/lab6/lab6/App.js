import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import {
  Ionicons,
  Entypo,
  AntDesign,
  EvilIcons,
  FontAwesome,
} from '@expo/vector-icons';
import Card from './components/Card';
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://6832b04ec3f2222a8cb319cf.mockapi.io/courses/Item'
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.8,
          height: '10%',
          backgroundColor: '#1ba9ff',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <TouchableOpacity>
            <Ionicons name="arrow-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: 500 }}>Chat</Text>
          <TouchableOpacity>
            <EvilIcons name="cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 8 }}>
        <View style={{backgroundColor:'#e5e5e5', padding:20}}>
          <Text>Ban co muon mua san pham nao khong? Hay vo gio hang toi se tu choi</Text>
        </View>
        <FlatList data={data} renderItem={({ item }) => <Card data={item} />} />
      </View>
      <View
        style={{
          flex: 0.8,
          height: '10%',
          width: '100%',
          backgroundColor: '#1ba9ff',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity>
            <FontAwesome name="bars" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="back" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
