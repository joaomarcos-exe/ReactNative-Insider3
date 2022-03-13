import React from 'react'
import {View, Text} from 'react-native'
import {Feather} from '@expo/vector-icons'

import {ContainerBottom, Item} from './styles'

export default function ListItem() {
    return(
        <View>
            <ContainerBottom activeOpacity={0.9} onPress={() => alert('test')}>
                <Feather 
                    name='link'
                    color= '#FFF'
                    size={24}
                />
                <Item numerOfLines={1} >google.com</Item>
            </ContainerBottom>
        </View>
    )
}