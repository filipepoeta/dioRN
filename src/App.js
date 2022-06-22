import React from "react";
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from "react-native";

const colorGitHub = '#010409';
const colorFontName = '#C9D1D9';
const colorFontNick = '#4F565E';
const profileGitHub = 'https://avatars.githubusercontent.com/u/58982230?v=4';
const urlMyGitHub = 'https://github.com/filipepoeta';


const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log("Verificando link");
        const res = await Linking.canOpenURL(urlMyGitHub);
        if(res){
            console.log("Link aprovado");
            console.log("Abrindo link...");
            await Linking.canOpenURL(urlMyGitHub);
        }
    };
        
  return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle='light-content' />
    <View style={style.content}>
      <Image 
      accessibilityLabel="Filipe no alto de um prédio na avenida paulista"
      style={style.avatar} 
      source={{uri:profileGitHub}}/>

      <Text accessibilityLabel="Nome: Filipe Poeta" style={[style.defaultfont, style.name]}>Filipe Poeta </Text>
      <Text accessibilityLabel="Nickname: filipe poeta" style={[style.defaultfont, style.nickname]}>filipepoeta</Text>
      <Text accessibilityLabel="Descrição: Especialista em RM | Bacharelando em Engenharia de SoftWare | Fótografo amador | Analista de Sistema | Cristão | Gamer" style={[style.defaultfont, style.description]}>Especialista em RM | Bacharelando em Engenharia de SoftWare | Fótografo amador | Analista de Sistema | Cristão | Gamer</Text>
    </View>

    <Pressable onPress={handlePressGoToGitHub}>
    <View style={style.button}>
        <Text style={[style.defaultfont, style.textbutton]}>Open in GitHub</Text>
    </View>
    </Pressable>



    </SafeAreaView>

  );
}

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGitHub,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    content:{
        alignItems: 'center',
        padding: 20,
        
    },
    avatar:{
        height: 200,
        width:200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultfont:{
        color:colorFontName,
    },

    name:{
        
        marginTop:20,
        fontSize:24,
        fontWeight:'bold',

    },

    nickname:{
        color: colorFontNick,
        fontSize:18,
    },

    description:{
       
        fontWeight:'bold',
    },

    button:{
        marginTop:20,
        backgroundColor: colorFontNick,
        borderRadius: 10,
        padding: 20,
    },

    textbutton:{
        fontWeight:'bold',
        fontSize:16,
        
    }
  
})