
/* 1. ZONA IMPORTACIONES */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import {Perfil} from '../components/Perfil';



/* 2. ZONA DE MAIN (componentes ó Screens*/
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Perfil nombre="Luz Citlali Resendiz" carrera="ITIID"
      materia="Desarrollo de Aplicaciones Movil" cuatrimestre="Cuarto" style={styles.tarjeta1}/>

      <Perfil nombre="Juan Carlos Lopez" carrera="Ingenieria en Sistemas Computacionales"
      materia="Programación Web" cuatrimestre="Segundo" style={styles.tarjeta2} />
      
      <Perfil nombre="Berenice Martinez" carrera="Comercio Internacional"
      materia="Contaduria" cuatrimestre="Primero" style={styles.tarjeta3}/>
      <StatusBar style="auto" />
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
  tarjeta1:{backgroundColor:'pink'},
  tarjeta2:{backgroundColor:'orange'},
  tarjeta3:{backgroundColor:'green'},
});
