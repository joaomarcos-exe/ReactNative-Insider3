import React from 'react';
import {View,TouchableOpacity, TouchableWithoutFeedback, Share} from 'react-native'

import {ModalContainer, Header, Container,LinkArea,Title,LongUrl,ShortLinkUrl, ShortLinkArea} from './styles'
import {Feather} from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard';

export default function ModalLink({onClose}){

    function copyLink(){
        Clipboard.setString('Alguma coisa')
        alert('link copiado')
    }

    async function handleShare(){
        try{
            const result = await Share.share({
                message:`Link: https://google.com `
            });
            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('ActivityType')
                }else{
                    console.log('Compartilhado')
                }
            }else if(result.action === Share.dismissedAction){
                console.log('modal fechado')
            }
        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <ModalContainer>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={{flex:1}}>
                </View>
            </TouchableWithoutFeedback>

            <Container>
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Feather 
                            name='x'
                            color='#212743'
                            size={30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShare}>
                        <Feather 
                            name='share'
                            color='#212743'
                            size={30}
                        />
                    </TouchableOpacity>
                </Header>
                <LinkArea>
                    <Title>Link encurtado</Title>
                    <LongUrl
                        numberOfLines={1}
                    >
                        https://google.com
                    </LongUrl>

                    <ShortLinkArea
                        activeOpacity={1}
                        onPress={copyLink}
                    >
                        <ShortLinkUrl
                            numberOfLines={1}
                        >
                            https://google.com
                        </ShortLinkUrl>
                        <TouchableOpacity onPress={copyLink}>
                            <Feather 
                                name='copy'
                                color="#FFF"
                                size={25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}