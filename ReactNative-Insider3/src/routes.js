import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native'


import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

import {Ionicons} from '@expo/vector-icons'



const Drawer = createDrawerNavigator()

export default function Routes() {
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown:false,
                drawerActiveBackgroundColor:'#2CCBB9',
                drawerActiveTintColor:'#FFF',
                drawerItemStyle:{
                    marginTop:16,
                },
                drawerLabelStyle:{
                    fontSize:19
                }
                
            }}
            
        >
            <Drawer.Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'Encurtart URL',
                    drawerIcon: ({focused, size, color}) =>(
                        <Ionicons 
                            name={focused ? "cube" : "cube"}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="MyLinks"
                component={MyLinks}
                options={{
                    title: 'Encurtart URL',
                    drawerIcon: ({focused, size, color}) =>(
                        <Ionicons 
                            name={focused ? "stats-chart" : "stats-chart-outline"}
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>    
    )
}

const style = StyleSheet.create({
    test:{
        marginTop:50,
        backgroundColor:'red'
    }
})