import React from 'react'
import {View, Text} from 'react-native'
import {Feather} from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import {ContainerBottom, Item, ActionContainer} from './styles'

export default function ListItem({data, selectedItem, deleteItem}) {
    function RightActions(){
        return(
            <ActionContainer onPress={ () => deleteItem(data.id)}>
                <Feather 
                    name='trash'
                    color='#FFF'
                    size={24}
                />
            </ActionContainer>
        )
    }
    return(
        <View>
            <Swipeable renderRightActions={RightActions}>
                <ContainerBottom activeOpacity={0.9} onPress={() => selectedItem(data)}>
                    <Feather 
                        name='link'
                        color= '#FFF'
                        size={24}
                    />
                    <Item numerOfLines={1}>{data.long_url}</Item>
                </ContainerBottom>
            </Swipeable>
        </View>
    )
}