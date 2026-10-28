/* 1. ZONA DE IMPORTACIONES */
import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ModalBottomScreen from './ModalBottomScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import { Button } from 'react-native';

/* 2. ZONA PRINCIPAL */
export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'safe':
      return <SafeScreen />;

    case 'press':
      return <PressableScreen />;

    case 'tarjetas':
      return <TarjetasScreen />;

    case 'TextInputScreen':
      return <TextInputScreen />;

    case 'FlatListScreen':
      return <FlatListScreen />;

    case 'ImageBackgroundScreen':
      return <ImageBackgroundScreen />;

    case 'ModalBottomScreen':
      return <ModalBottomScreen />;

    case 'ActivityIndicatorScreen':
      return <ActivityIndicatorScreen />;

    default:
      return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Menú de prácticas</Text>

          <Button
            title="PRACTICA TARJETAS"
            onPress={() => setScreen('tarjetas')}
          />

          <Button
            title="PRACTICA SAFEAREAVIEW"
            onPress={() => setScreen('safe')}
          />

          <Button
            title="PRACTICA PRESSABLE"
            onPress={() => setScreen('press')}
          />

          <Button
            title="PRACTICA TEXTINPUT"
            onPress={() => setScreen('TextInputScreen')}
          />

          <Button
            title="PRACTICA FLATLIST"
            onPress={() => setScreen('FlatListScreen')}
          />

          <Button
            title="PRACTICA IMAGEBACKGROUND"
            onPress={() => setScreen('ImageBackgroundScreen')}
          />

          <Button
            title="PRACTICA MODALBOTTOM"
            onPress={() => setScreen('ModalBottomScreen')}
          />

          <Button
            title="PRACTICA ACTIVITYINDICATOR"
            onPress={() => setScreen('ActivityIndicatorScreen')}
          />
        </View>
      );
  }
}

/* 3. ZONA DE ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },

  titulo: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },

  boton: {
    backgroundColor: '#1685d1',
    paddingVertical: 10,
    paddingHorizontal: 12,
    minWidth: 150,
    alignItems: 'center',
    borderRadius: 2,
  },

  textoBoton: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});