import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import * as React from 'react';
export default function ShopScreen() {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setloading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://68d5dc8de29051d1c0afc3a3.mockapi.io/data'
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);

  const product = data[0];
  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />;
  }

  if (!data || data.length === 0) {
    return (
      <Text style={{ marginTop: 50, textAlign: 'center' }}>
        Không có dữ liệu
      </Text>
    );
  }
  return (
    <View style={{ flex: 1 }}>
    <View style={{flex: 1, alignItems:'center'}}>
    <Image source={{ uri: product.thumbnail }} resizeMode="contain" style={{width:'100%', height:'100%'}}/>
    </View>
      <View style={{ flex: 1 }}>
      <Text style={{}}>{product.name}</Text>
      </View>
    </View>
  );
}
