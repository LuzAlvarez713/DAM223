
/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Button, Text} from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen'
import PressableScreen from './PressableScreen'
import TarjetasScreen from './TarjetasScreen'

/* 2. ZONA DE MAIN (componentes ó Screens*/
export default function MenuScreen(){
    const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'safe':
            return <SafeScreen/>
        case 'press':
            return <PressableScreen/>
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'menu':
            default:
            return (
                <View style={StyleSheet.container}>
                    <Text> Menú de Practica</Text>

                    <Button title="Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
                    <Button title="Practica SafeAreaView" onPress={()=>setScreen('safe')}></Button>
                    <Button title= "Practica Pressable" onPress={()=>setScreen('press')}></Button>
                </View>
            );
    }//switch
}//funcion

/* 3. ZONA DE ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});