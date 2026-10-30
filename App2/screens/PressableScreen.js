/* 1. ZONA IMPORTACIONES */
import { useState} from 'react';
import { StyleSheet, Text, View, Switch, Pressable } from 'react-native';

export default function PressableScreen() {

  const[encendido, setEncendido] = useState(false);

  const[contador, setContador] = useState(0);

  return(

    <View style = {styles.container}>
      <Text style = {styles.titulo}> Practica: Switch y Pressable</Text>

      <Switch
        values={encendido}
        onValueChange={(valor) => setEncendido(valor)}
      />
      <Text styles={styles.texto}>
        El switch esta: {encendido ? 'Encendido' : 'Apagado'}
      </Text>

      < Pressable
        style = {styles.boton}
        onPress={() => setContador(contador + 1)}
      >

        <Text styles = {styles.textoBoton}> Presioname</Text>
      </Pressable>
      <Text styles = {styles.texto}> Veces presionado:{contador} </Text>
    </View>

  );
};

/* 3. ZONA DE ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titulo:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:40,
  },
  texto:{
    fontSize:18,
    marginVertical:15,
  },
  boton:{
    backgroundColor: 'pink',
    padding:15,
    borderRadius:10,
    marginBlock:30
  },
  textoBoton:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
  },
});