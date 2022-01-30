import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>แสดงนื้อหาหน้ารายงาน</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    fontSize: 20,
    borderWidth: 3,
    borderColor: "blue",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 15
  }
})

export default Report