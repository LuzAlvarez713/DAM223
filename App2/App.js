
/* 1. ZONA IMPORTACIONES */
import { StyleSheet, Text, View, Image} from 'react-native';
import MenuScreen from './screens/MenuScreen';



/* 2. ZONA DE MAIN (componentes ó Screens*/
export default function App() {
  return (
    <MenuScreen></MenuScreen>
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
