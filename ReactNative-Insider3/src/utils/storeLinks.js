import AsyncStorage from "@react-native-async-storage/async-storage";

//Search links
export async function getLinksSaves(key){
    const myLinks = await AsyncStorage.getItem(key)

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}

//Save link
export async function saveLink(key, newLink){
    let linksStored = await getLinksSaves(key);

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('lInks ja existente')
        return;
    }

    linksStored.push(newLink)
    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo')
}

//Erase links
export async function deleteLink(links, id){
    let myLinks = links.filter((item) =>{
        return(item.id !== id)
    })

    await AsyncStorage.setItem('links', JSON.stringify(myLinks))

    console.log('Link deletado')

    return myLinks
}