
/* 1. ZONA IMPORTACIONES */
import { StyleSheet, View, Text} from 'react-native';

/* 2. ZONA DE MAIN (componentes ó Screens*/
export default function PressableScreen() {
    return (
      <View style={StyleSheet.container}>
        <Text> Aqui va la practica 11</Text>
        <Text> Equipo de Karen</Text>
      </View>
    );
}

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