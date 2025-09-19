import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
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
          <View
            style={{
              flexDirection: 'row',
              backgroundColor:'white'
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin:2}}>
              <FontAwesome name="search" size={24} color="black" />
              <TextInput style={{height:'100%'}}/>
            </View>
          </View>
          <TouchableOpacity>
            <EvilIcons name="cart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 8 }}>
        <FlatList numColumns={2} data={data} renderItem={({ item }) => <Card data={item} />} />
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
