import React from 'react'
import { StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import Ionicons from 'react-native-ionicons'

import Home from './screens/bottomtab/Home'
import Report from './screens/bottomtab/Report'
import Notification from './screens/bottomtab/Notification'
import Setting from './screens/bottomtab/Setting'
import Profile from './screens/bottomtab/Profile'

import Detail from './screens/Detail'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// สร้างฟังก์ชันสำหรับไว้เก็บการแสดง Tab Menu
function MainTabs(){
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff176',
        tabBarInactiveTintColor: '#e0f7fa',
        tabBarStyle:{
          backgroundColor:'teal',
          height: 56,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          fontSize:20,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home" size={24} color={color} />
          }
        }}
       />
      <Tab.Screen name="Report" component={Report} 
        options={{
          tabBarLabel: 'รายงาน',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="stats" size={24} color={color} />
          }
        }}
       />
      <Tab.Screen name="Notification" component={Notification} 
        options={{
          tabBarLabel: 'แจ้งเตือน',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="ios-notifications" size={24} color={color} />
          }
        }}
       />
      <Tab.Screen name="Setting" component={Setting} 
        options={{
          tabBarLabel: 'ตั้งค่า',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="md-settings" size={24} color={color} />
          }
        }}
       />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: 'โปรไฟล์',
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="person" size={24} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}


function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'หน้าหลัก';
    case 'Report':
      return 'รายงาน';
    case 'Notification':
      return 'แจ้งเตือน';
    case 'Setting':
      return 'ตั้งค่า';
    case 'Profile':
      return 'โปรไฟล์';
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Maintab" component={MainTabs} 
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerStyle: {
              backgroundColor: 'teal',
           },
           headerTitleStyle: {
            color: '#ffffff',
           }
          })}
        />

        <Stack.Screen name="Detail" component={Detail} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})