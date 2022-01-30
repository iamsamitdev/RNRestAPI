import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>แสดงนื้อหาหน้าหลัก</Text>
      <Text></Text>
      <Button
        onPress={()=> navigation.push("Detail")}
        title="ดูรายละเอียดสินค้า"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
    borderWidth: 3,
    borderColor: 'pink',
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 15,
  },
})

export default Home


