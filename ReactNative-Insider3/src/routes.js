import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';


import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

const Drawer = createDrawerNavigator()

export default function Routes() {
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown:false,
                drawerActiveBackgroundColor:'#2CCBB9',
                drawerActiveTintColor:'#FFF',
                
            }}
            style={{marginTop:100}}
        >
            <Drawer.Screen 
                name="Home"
                component={Home}
            />
            <Drawer.Screen 
                name="MyLinks"
                component={MyLinks}
            />
        </Drawer.Navigator>    
    )
}